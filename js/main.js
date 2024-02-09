window.onload = (event) => {
    document.getElementById("mainTitle").innerText = "Alex's super cool game";

    //game window reff
    const gameWindow = document.getElementById("gameWindow");

    //inventory
    const inventory = document.getElementById("inventoryBox");
    let keyItem = document.getElementById("keyItem")
    //main character 
    const mainCharacter = document.getElementById("mainCharacter");
    const offsetCharacter = 16;

    const tree1 = document.getElementById("squareTree");
    const door = document.getElementById("door");
    const key = document.getElementById("key");
    gameWindow.onclick = function (e) {
        let rect = gameWindow.getBoundingClientRect();
        let y = e.clientY - rect.top;
        let x = e.clientX - rect.left;

        //move character
        mainCharacter.style.top = `${y - 16}px`;
        mainCharacter.style.left = `${x - 16}px`;


        setObjectsOpacity();
        switch (e.target.id) {
            case "squareTree":
                tree1.style.opacity = 0.5;
                break;
            case "door":
                door.style.opacity = 0.5;
                break;
            case "key":
                key.style.opacity = 0.5;
                test();


                break;
            default:

                break;
        }

    }

    //fix: character going out of bounds

    const setObjectsOpacity = () => {
        tree1.style.opacity = 1;
        door.style.opacity = 1;
        key.style.opacity = 1;
    }
    async function test() {
        console.log('start timer');
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('after 1 second');
        document.getElementById("key").remove();
        keyItem.innerText = "-Key"
    }
}
