window.onload = (event) => {
    document.getElementById("mainTitle").innerText = "Alex's super cool game";

    //game window reff
    const gameWindow = document.getElementById("gameWindow");


    //main character 
    const mainCharacter = document.getElementById("mainCharacter");
    const offsetCharacter = 16;

    const tree1 = document.getElementById("squareTree");
    gameWindow.onclick = function (e) {
        let rect = gameWindow.getBoundingClientRect();
        let y = e.clientY - rect.top;
        let x = e.clientX - rect.left;

        //move character
        mainCharacter.style.top = `${y - 16}px`;
        mainCharacter.style.left = `${x - 16}px`;

        console.log("y is " + y + "x is " + x)

        console.log(e.target.id)

        switch (e.target.id) {
            case "squareTree":
                tree1.style.opacity = 0.5;
                break;
            default:
                tree1.style.opacity = 1;
                break;
        }

    }

    //fix: character going out of bounds



}
