window.onload = (event) => {
    document.getElementById("mainTitle").innerText = "Alex's super cool game";

    //game window reff
    const gameWindow = document.getElementById("gameWindow");

    //inventory
    let inventory = [];
    console.log(inventory)
    const inventoryBox = document.getElementById("inventoryBox");
    const inventoryList = document.getElementById("inventoryList");

    //main character 
    const mainCharacter = document.getElementById("mainCharacter");
    const offsetCharacter = 16;

    //speach bubbles
    const mainSpeach = document.getElementById("mainSpeach");
    const counterSpeach = document.getElementById("counterSpeach");
    // audio for dialog
    const heroAudio = document.getElementById("heroAudio");
    const counterAudio = document.getElementById("counterAudio");

    //avatar
    const counterAvatar = document.getElementById("counterAvatar");

    gameWindow.onclick = function (e) {
        let rect = gameWindow.getBoundingClientRect();
        let y = e.clientY - rect.top;
        let x = e.clientX - rect.left;

        if (counterSpeach.style.opacity == 0 && mainSpeach.style.opacity == 0) {
            if (e.target.id !== "mcImage") {
                mainCharacter.style.top = `${y - offsetCharacter}px`;
                mainCharacter.style.left = `${x - offsetCharacter}px`;
            }


            //setObjectsOpacity();

            switch (e.target.id) {
                case "squareTree":

                    break;
                case "doorWizardTower":
                    if (checkItem("Rusty Key")) {
                        showMessage(mainSpeach, "I opened the door. Yeah!", heroAudio)
                        console.log("I opened the door. Yeah!");
                    } else if (checkItem("Coin")) {
                        removeItem("Coin", "coin")
                        showMessage(mainSpeach, "Oh no I lost the coin and it didn't open the door.. Feel kinda stupid..", heroAudio);
                        console.log("Oh no I lost the coin and it didn't open the door.. Feel kinda stupid..");
                    } else {
                        console.log("Fuck this door is locked and I don't have a key. boohoo :(");
                    }
                    break;
                case "key":
                    getItem("Rusty Key", "rustyKey");
                    //ChangeInventory('key', "add")
                    break;
                case "pond":
                    getItem("Coin", "coin");
                    break;
                default:

                    break;
            }
        }
    }
    /**
     * Adds or removes item from inv
     * @param {*} itemName 
     * @param {*} ation 
     */



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
        console.log(itemName)
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


    async function test() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        document.getElementById("key").remove();
        keyItem.innerText = "-Key"
    }

    /**
     * it will show dialoge.
     * @param {getElementById} targetBubble 
     * @param {string} message 
     * @param {getElementById} targetSound 
     */


    function showMessage(targetBubble, message, targetSound) {
        targetSound.currentTime = 0;
        targetSound.play();
        targetBubble.innerText = message;
        targetBubble.style.opacity = 1;
        setTimeout(hideMessage, 4 * sec, targetBubble, targetSound);
    }
    /**
         * Hides message and pauze the audio
         * @param {getElementById} targetBubble 
         * @param {getElementById} targetSound 
         */
    function hideMessage(targetBubble, targetSound) {
        targetSound.pause();
        targetBubble.innerText = "...";
        targetBubble.style.opacity = 0;
    }

}

//runGame();