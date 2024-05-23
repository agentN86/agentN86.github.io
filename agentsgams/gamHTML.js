function createItem(game, formatted, link, image, color, description) {
    var template = `
    <br>
    <div style="display: flex; align-items: top;">
        <a name="${game}"></a>
        <a href="${link}">&nbsp;&nbsp;<img src="${image}" alt="${game}" width="100" style="border: 3px solid ${color};"></a><span class="title">&nbsp;&nbsp;<a style="color: white; cursor: pointer;" href="${link}">${formatted}</a></span>
        <p1>&nbsp;${description}</p1>
    </div>
    `
    document.getElementById('gamList').innerHTML = document.getElementById('gamList').innerHTML + template
}

createItem("epicbossbattle", "Epic Boss Battle", "https://agentn86.github.io/epicbossbattle/v1.3.3/", "https://agentn86.github.io/epicbossbattle/v1.3.3/loading.png", "pink", "is a tough, rage gam where you have to avoid and end a spaceship without dying in the process! Use the retry button to restart the game when needed.")
createItem("smnake", "SMnake", "https://taco-eating-truck.glitch.me/index.html", "./comingsoon.png", "pink", "is a simple gam where you will forever collect meat with no objective! Passes time away... Use the controls on the top right to play.")
createItem("coincollector", "Coin Collector", "https://coincollecor.glitch.me/index.html", "./comingsoon.png", "pink", "is a simple gam where you will have to collect as much money as you can. Use the controls on the bottom to play.")
createItem("3dmaze", "3D Maze", "./gams/3dmaze.html", "./thumbs/3dmaze.svg", "pink", "is a simple maze gam where you have to find the exit! Use WASD to move and left and right arrows to look around. Try finding the green flag to win.")
createItem("alienshooter", "Alien Shooter", "./gams/alienshooter.html", "./thumbs/alienshooter.png", "pink", "is a simple shooter gam where the user has to shoot the alien. The more you shoot- the faster it is! Use mouse to shoot.")
createItem("bitcoin-clicker", "Bitcoin Clicker", "https://julianyaman.github.io/bitcoin-clicker/", "./comingsoon.png", "white", "is a 'Cookie Clicker' similar type gam- but instead it's bitcoin!")
createItem("cookie-clicker", "Cookie Clicker", "https://steamcookieclicker.github.io/", "./comingsoon.png", "white", "is exactly what it sounds like. You know what it is- why not play it?")
createItem("papaspizzeria", "Papa's Pizzeria", "./gams/flash/papapizzera.html", "./thumbs/papapizzeria.jpeg", "white", "is the original classic of the Papa gams. Own a pizza business and get the best scores!")
createItem("papasburgeria", "Papa's Burgeria", "./gams/flash/papaburger.html", "./thumbs/papaburger.jpeg", "white", "is one of the sequels to Papa's Pizzeria. Why not give both a try?")
createItem("ageofwar2", "Age of War 2", "./gams/flash/ageofwar2.html", "./thumbs/ageofwar2.jpeg", "white", "is a war simulation gam where you try to win a war aganist a enemy AI!")
createItem("run2", "Run 2", "./gams/flash/run2.html", "./thumbs/run2.jpeg", "white", "is excatly what is sounds like- RUN! You can jump and move around to make it to the next level.")
createItem("whackboss", "Whack your Boss", "./gams/flash/whackboss.html", "./thumbs/whackyourboss.jpeg", "white", "might not the the most family friendly gam out there- but it is sure fun to do something after a rough day.")
createItem("ducklife", "Duck Life", "./gams/flash/ducklife.html", "/thumbs/ducklife.jpeg", "white", "is a gam where you have to train a duck to get your farm back!")
//createItem("eggycar", "Eggy Car", "./gams/eggycar", "./thumbs/eggycar.png", "white", "Keep your egg in your car without dropping!")