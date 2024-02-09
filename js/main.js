window.onload = (event) => {
    document.getElementById("mainTitle").innerText = "Alex's super cool game";

    //game window reff
    const gameWindow = document.getElementById("gameWindow");


    //main character 
    const mainCharacter = document.getElementById("mainCharacter");

    const offsetCharacter = 16;

    gameWindow.onclick = function (e) {
        let rect = gameWindow.getBoundingClientRect();
        let y = e.clientY - rect.top;
        let x = e.clientX - rect.left;

        //move character
        mainCharacter.style.top = `${y - 16}px`;
        mainCharacter.style.left = `${x - 16}px`;

        console.log("y is " + y + "x is " + x)
    }

    //fix: character going out of bounds



}
