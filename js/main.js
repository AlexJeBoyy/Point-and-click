window.onload = (event) => {
    document.getElementById("mainTitle").innerText = "Alex's super cool game";

    //game window reff
    const gameWindow = document.getElementById("gameWindow");

    //inventory

    const inventoryBox = document.getElementById("inventoryBox");
    let keyItem = document.getElementById("inventoryList");
    let inventory = [];
    let inventoryList;
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
        if (e.target.id !== "mcImage") {
            mainCharacter.style.top = `${y - 16}px`;
            mainCharacter.style.left = `${x - 16}px`;
        }

        setObjectsOpacity();

        switch (e.target.id) {
            case "squareTree":

                break;
            case "door":

                break;
            case "key":

                getItem("Rustey Key", "key");

                break;
            case "mushroom":
                getItem("coin", "coin");
                break;
            default:

                break;
        }

    }
    /**
     * //checks if value exict within the array
     * if not then it adds value to the array and show item function
     * @param {string} itemName 
     * @param {string} itemId 
     */
    function getItem(itemName, itemId) {
        if (!checkItem(itemName)) {
            inventory.push(itemName);
            showItem(itemName, itemId);
        }


    }
    function checkItem(itemName) {
        return inventory.includes(itemName);
    }
    async function showItem(itemName, itemId) {
        keyElement.id = itemId;
        keyElement.innerText = itemName;
        await new Promise(resolve => setTimeout(resolve, 1000));
        inventoryList.appendChild(keyElement);


        keyItem.innerText = "-" + itemName;
    }
    function removeItem(itemName, itemId) {
        inventory = inventory.filter(function (newInventory) {
            return newInventory !== itemName;
        });

        document.getElementById(itemId).remove();
    }

    const setObjectsOpacity = () => {
        tree1.style.opacity = 1;
        door.style.opacity = 1;
        key.style.opacity = 1;
    }
    async function test() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        document.getElementById("key").remove();
        keyItem.innerText = "-Key"
    }
}
