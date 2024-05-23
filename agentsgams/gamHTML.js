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
createItem("theimpossiblequiz", "The Impossible Quiz", "./gams/flash/impossiblequiz.html", "./thumbs/impossiblequiz.jpeg", "white", "is a super hard gam with over 100 questions! Can you beat it?")
createItem("worldhardgame", "The World's Hardest Game", "./gams/flash/worldhardgame.html", "./thumbs/worldhardgame.jpeg", "white", "is a super hard gam with a bunch of levels... can you beat it?")
createItem("portaltheflashversion", "Portal: The Flash Version", "./gams/flash/portalflash.html", "./thumbs/portalflash.jpeg", "white", "is the '2D version' of Portal.. can you get through the test chambers?")
createItem("ageofwar", "Age of War", "./gams/flash/ageofwar.html", "./thumbs/ageofwar.jpeg", "white", "is the original version of Age of War 2. Give it a try!")
createItem("papafreezeria", "Papa's Freezeria", "./gams/flash/papafreezer.html", "./thumbs/papafreeze.jpeg", "white", "is another sequal to the Papa franschise. This time- deserts!")
createItem("papapancake", "Papa's Pancakeria", "./gams/flash/papapancake.html", "./thumbs/papapancake.jpeg", "white", "is another sequal to the Papa franschise. This time- pancakes!")
createItem("bloonstd5", "Bloons Tower Defense 5", "./gams/flash/bloontd5.html", "./thumbs/bloonstd5.jpeg", "white", "is a tower defense game where you have to defend your tower- the enemy being balloons!")
createItem("slope", "SLOPE", "./gams/slope", "./thumbs/slope.jpeg", "white", "is a infinite 'runner', so to say... but your a ball!")
createItem("basketballstars", "Basketball Stars", "./gams/basketballstars", "./thumbs/basketballstars.png", "white", "is a co-op/singleplayer basketball gam. Be some of your favorite basketball stars!")
createItem("timeshooter3", "Time Shooter 3", "./gams/timeshooter3", "./thumbs/timeshooter3.png", "white", "is a shooter gam where time moves when YOU move!")
createItem("fancypants", "Fancy Pants Adventures", "./gams/flash/fancypants.html", "./thumbs/fancypantsworld1.png", "white", "is a cool but simple platformer- with many different levels and enemies!")
createItem("alienhom", "Alien Hominid", "./gams/flash/alienhom.html", "./thumbs/alienhom.png", "red", "is when you are the alien and you need to get out of earth before the FBI catches you! Not the most family-friendly, to be certain- but great gam to play after-school.")
createItem("tosstheturtle", "Toss the Turtle", "./gams/flash/tosstheturtle.html", "./thumbs/tosstheturtle.png", "red", "is not that family friendly- but is a funny little cartoon viol. gam where you toss the turtle to get points.")
createItem("bloxorz", "Bloxorz", "./gams/flash/bloxorz.html", "./thumbs/bloxorz.png", "white", "is a puzzle game where you have to fit a rectangle into a square hole- and can get challenging!")
createItem("wastedsky", "Wasted Sky", "./gams/flash/wastedsky.html", "./thumbs/wastedsky.png", "white", "is a point and click game where you need to need to destroy the enemy ships!")
createItem("impossiblequiz2", "The Impossible Quiz 2", "./gams/flash/impossiblequiz2.html", "./thumbs/impossiblequiz2.png", "white", "is the sequal to The Impossible Quiz- even more impossible that can be!")
createItem("whackcomputer", "Whack your Computer", "./gams/flash/whackcomputer.html", "./thumbs/whackcomputer.png", "white", "helps you answer the question- can you feel better after whacking your computer? Find out...")
createItem("papacheese", "Papa's Cheeseria", "./gams/flash/papaCheese.html", "./thumbs/papacheeseria.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
//createItem("eggycar", "Eggy Car", "./gams/eggycar", "./thumbs/eggycar.png", "white", "Keep your egg in your car without dropping!")