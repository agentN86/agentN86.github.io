var game = "eggycar"
var game_formatted = "Eggy Car"
var link = "./gams/eggycar"
var image = "./thumbs/eggycar.png"
var color = "white"
var description = "Keep your egg in your car without dropping!"

var template = `
<br>
<div style="display: flex; align-items: top;">
    <a name="${game}"></a>
    <a href="${link}">&nbsp;&nbsp;<img src="${image}" alt="${game}" width="100" style="border: 3px solid ${color};"></a><span class="title">&nbsp;&nbsp;<a style="color: white; cursor: pointer;" href="${link}">${game_formatted}</a></span>
    <p1>&nbsp;${description}</p1>
</div>
`

document.getElementById('gamList').append(template)