window.onload = (event) => {
    document.getElementById("mainTitle").innerText = "Alex's super cool game";

    //game window reff
    const gameWindow = document.getElementById("gameWindow");

    //inventory

    const inventoryBox = document.getElementById("inventoryBox");

    let inventory = [];
    const inventoryList = document.getElementById("inventoryList");
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

                getItem("Rustey Key", "rustyKey");

                break;
            case "mushroom":
                getItem("coin", "coin");
                break;
            default:

                break;
        }

    }
    /**
  * Checks if the value exists within the array
  * If not then it adds value to the array and use showItem function
  * @param {string} itemName 
  * @param {string} itemId 
  */
    function getItem(itemName, itemId) {
        if (!checkItem(itemName)) {
            inventory.push(itemName);
            showItem(itemName, itemId);
        }
        console.log(inventory);

    }
    /**
   * This returns string value if it exist within the array
   * @param {string} itemName 
   * @returns 
   */
    function checkItem(itemName) {
        return inventory.includes(itemName);
    }
    /**
         * Needs a name for displaying item and a html id name
         * @param {string} itemName 
         * @param {string} itemId 
         */
    async function showItem(itemName, itemId) {
        const keyElement = document.createElement("li");
        keyElement.id = itemId;
        keyElement.innerText = itemName;
        await new Promise(resolve => setTimeout(resolve, 1000));
        inventoryList.appendChild(keyElement);



    }
    /**
     * Removes item from array and the element within the HTML
     * @param {string} itemName 
     * @param {string} itemId 
     */
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
