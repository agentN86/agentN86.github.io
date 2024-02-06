var gameUrls = [
    // 1v1.lol
    "https://book-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/mind4ur/WPpluginsync@main/lib/edit/up.xml"
]

function opengamwindow(game) {
    return function() {
        var win;
        if (win) {
            // goes back to the gam
            win.focus()
        } else {
            // sets up the window
            win = window.open()
            win.document.body.style.margin = "0"
            win.document.body.style.height = '100vh'

            // sets up the iframe
            var iframe = win.document.createElement("iframe")
            iframe.style.border = "none"
            iframe.style.width = "100%"
            iframe.style.height = "100%"
            iframe.style.margin = "0"
            
            // we choose the gam here
            switch(game) {
                case "1v1.lol":
                    iframe.src = gameUrls[0]
                    break
            }

            // we add the iframe to the window
            win.document.body.appendChild(iframe)

            var interval = setInterval(function() {
                if (win.closed) {
                    // when we close the window, we can make another game window.
                    // without this we would be stuck trying to focus to the game window
                    clearInterval(interval)
                    win = undefined
                }
            }, 500)
        }
    }
}