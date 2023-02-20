function myBtn(display){
         display.preventDefault()
     "name" = document.getElementById("name").value;
     "type" = document.getElementById("type").value;
     "region" = document.getElementById("region").value;

    let pokemon = [];

    pokemon.push("name", "type", "region");

    let liEl = document.createElement("li");
    let theSpan = document.createElement("span");

    let node1 = document.createTextNode(pokemon[0] + "  ");
    let node2 = document.createTextNode(pokemon[1] + "  ");
    let node3 = document.createTextNode(pokemon[2] + "  ");

    theSpan.appendChild(node1);
    theSpan.appendChild(node2);
    theSpan.appendChild(node3);


liEl.appendChild(theSpan);
document.getElementById("pokedexEntries").appendChild(liEl);

        console.log(pokemon);
        console.log(liEl);

        const previewButton =
        <form action="http://google.com/search" target="_blank">
            <input name="q" hidden value="${name}"></input>
            <input type="submit"></input>
        </form>


        liEl.innerHTML (previewButton);

document.getElementById("pokedexEntries").appendChild(liEl);

        console.log(pokemon);
        console.log(liEl);
}
