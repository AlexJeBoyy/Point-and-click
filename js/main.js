window.onload = (event) => {
    document.getElementById("mainTitle").innerText = "Alex's super cool game";

    //game window reff
    const gameWindow = document.getElementById("gameWindow");
    const sec = 1000;
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
    const setMainDialog = document.getElementById('setMainDialog');
    // audio for dialog
    const mainAudio = document.getElementById("mainAudio");
    const counterAudio = document.getElementById("counterAudio");

    //avatar
    const counterAvatar = document.getElementById("counterAvatar");
    const goblinAvatar = document.getElementById("goblinAvatar");

    //worlds
    const world1 = document.getElementById("world1");
    const world2 = document.getElementById("world2");
    world2.style.display = 'none';
    //bools
    let doorUnlocked = false;
    let dialogSkip = false;
    let goblinCoin = false;



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
                //world 1
                case "statue":
                    showMessage(mainSpeach, "Hey a statue.. Looks okay.", mainAudio);
                    setTimeout(function () { counterAvatar.style.opacity = 1; }, 4 * sec);
                    setTimeout(showMessage, 4.1 * sec, counterSpeach, "I can talk you know..", counterAudio);
                    setTimeout(showMessage, 8.1 * sec, mainSpeach, "Wait what? That's not normal", mainAudio);
                    setTimeout(showMessage, 12.1 * sec, counterSpeach, "Just shut up.. You want a key.. Check the pillar.", counterAudio);
                    setTimeout(function () {
                        counterAvatar.style.opacity = 0;
                        setMainDialog.style.backgroundColor = 'rgba(255, 255, 255, 0)';
                    }, 16 * sec);
                    // setTimeout(hideMessage, 4 * sec, targetBubble, targetSound, setMainDialog);
                    break;
                case "doorWizardTower":
                    if (doorUnlocked) {
                        //change world 'none' is disable 'block' is enable
                        // Fade out world 1

                        world1.style.transition = 'opacity 1s ease-in-out';
                        world1.style.opacity = '0';
                        //world2.style.display = 'block';
                        world2.style.opacity = '1';
                        world1.style.transition = 'opacity 1s ease-out-in';

                        // After the fade out animation completes, hide world 1 and fade in world 2
                        setTimeout(function () {
                            world1.style.display = 'none';
                            world1.style.transition = ''; // Reset transition property
                            world2.style.display = 'block';
                            world2.style.opacity = '1'; // Fade in world 2
                        }, 1000);
                    }
                    else if (checkItem("Rusty Key")) {
                        removeItem("Rusty Key", "rustyKey")
                        showMessage(mainSpeach, "I opened the door. Yeah!", mainAudio)
                        setTimeout(function () { counterAvatar.style.opacity = 1; }, 4 * sec);
                        setTimeout(showMessage, 4.1 * sec, counterSpeach, "Click on the door a second time to enter :)", counterAudio);
                        setTimeout(function () {
                            counterAvatar.style.opacity = 0;
                            setMainDialog.style.backgroundColor = 'rgba(255, 255, 255, 0)';
                        }, 8 * sec);
                        doorUnlocked = true;
                    } else if (checkItem("Coin")) {
                        removeItem("Coin", "coin")
                        showMessage(mainSpeach, "Oh no I lost the coin and it didn't open the door.. Feel kinda stupid..", heroAudio);

                    } else {
                        showMessage(mainSpeach, "Fuck this door is locked and I don't have a key. boohoo :(", heroAudio);
                    }
                    break;
                case "key":
                    if (!doorUnlocked) {
                        getItem("Rusty Key", "rustyKey");
                    }
                    break;
                case "pond":
                    getItem("Coin", "coin");
                    break;
                //world 2
                case "wizzardMan":
                    if (!checkItem("Nice Key", "key2")) {
                        if (!dialogSkip) {
                            showMessage(mainSpeach, "Hello magical old man, i would like to buy that key you have there.", mainAudio);
                            setTimeout(function () { counterAvatar.style.opacity = 1; }, 4 * sec);
                            setTimeout(showMessage, 4.1 * sec, counterSpeach, "Why do you want to buy it and i find magical old man a bit ofencive. Could you just call me a wizzard?", counterAudio);
                            setTimeout(showMessage, 8.1 * sec, mainSpeach, "I need it to get home and alr wizzard man", mainAudio);
                            setTimeout(showMessage, 12.1 * sec, counterSpeach, "You can buy it with 1 coin snob.", counterAudio);

                            if (checkItem("Coin", "coin") || checkItem("Goblin Coin", "coing")) {
                                setTimeout(showMessage, 16.1 * sec, mainSpeach, "I have a coin for you", mainAudio);
                                setTimeout(showMessage, 20.1 * sec, counterSpeach, "Thank you here is the key.", counterAudio);
                                setTimeout(showMessage, 24.1 * sec, mainSpeach, "Bye old wizzard man.", mainAudio);
                                setTimeout(showMessage, 28.1 * sec, counterSpeach, "Just shut up..", counterAudio, dialogSkip = true);
                                getItem("Nice Key", "key2");
                                if (checkItem("Coin", "coin")) {
                                    removeItem("Coin", "coin");

                                }
                                if (checkItem("Goblin Coin", "coing")) {
                                    removeItem("Goblin Coin", "coing");

                                }
                                setTimeout(function () {
                                    counterAvatar.style.opacity = 0;
                                    setMainDialog.style.backgroundColor = 'rgba(255, 255, 255, 0)';
                                }, 28 * sec);
                            }
                            else {
                                setTimeout(showMessage, 16.1 * sec, mainSpeach, "I dont have a coin for you.", mainAudio);
                                setTimeout(showMessage, 20.1 * sec, counterSpeach, "Go search one, maybe the goblin has one.", counterAudio, dialogSkip = true);
                                setTimeout(function () {
                                    counterAvatar.style.opacity = 0;
                                    setMainDialog.style.backgroundColor = 'rgba(255, 255, 255, 0)';
                                }, 24 * sec);
                            }

                        }
                        else {
                            setTimeout(function () { counterAvatar.style.opacity = 1; }, 4 * sec);
                            showMessage(counterSpeach, "Do you have the coin?", counterAudio);
                            if (checkItem("Coin", "coin") || checkItem("Goblin Coin", "coing")) {
                                setTimeout(showMessage, 4.1 * sec, mainSpeach, "I have a coin for you", mainAudio);
                                setTimeout(showMessage, 8.1 * sec, counterSpeach, "Thank you here is the key.", counterAudio);
                                setTimeout(showMessage, 12.1 * sec, mainSpeach, "Bye old wizzard man.", mainAudio);
                                setTimeout(showMessage, 16.1 * sec, counterSpeach, "Just shut up..", counterAudio);
                                getItem("Nice Key", "key2");
                            }
                            else {
                                setTimeout(showMessage, 4.1 * sec, mainSpeach, "I have a coin for you", mainAudio);
                                setTimeout(showMessage, 8.1 * sec, counterSpeach, "Go search one, maybe the goblin has one.", counterAudio);
                            }
                            setTimeout(function () {
                                counterAvatar.style.opacity = 0;
                                setMainDialog.style.backgroundColor = 'rgba(255, 255, 255, 0)';
                            }, 16 * sec);
                        }

                    }

                    break;
                case "goblin":
                    if (checkItem("Goblin Coin", "coing") || checkItem("Coin", "coin") || goblinCoin) {
                        setTimeout(function () { goblinAvatar.style.opacity = 1; }, 4 * sec);
                        showMessage(mainSpeach, "Hey goblin do you happen to have another coin for me?.", mainAudio);
                        setTimeout(showMessage, 4.1 * sec, counterSpeach, "You already have a coin. No.", counterAudio);

                    }
                    else {
                        setTimeout(function () { goblinAvatar.style.opacity = 1; }, 4 * sec);
                        showMessage(mainSpeach, "Hey goblin do you happen to have a coin for me?.", mainAudio);
                        setTimeout(showMessage, 4.1 * sec, counterSpeach, "You seem like a nice young person, maybe i do.", counterAudio);
                        setTimeout(showMessage, 8.1 * sec, mainSpeach, "Can you give it to me then? Please.", mainAudio);
                        setTimeout(showMessage, 12.1 * sec, counterSpeach, "Alright, here you have it", counterAudio);
                        getItem("Goblin Coin", "coing");
                        goblinCoin = true;
                    }
                    setTimeout(function () {
                        setMainDialog.style.backgroundColor = 'rgba(255, 255, 255, 0)';
                        goblinAvatar.style.opacity = 0;

                    }, 16 * sec);

                    break;
                case "backDoor":
                    if (checkItem("Nice Key", "key2")) {
                        world2.style.transition = 'opacity 1s ease-in-out';
                        world2.style.opacity = '0';
                        //world2.style.display = 'block';
                        world1.style.opacity = '1';
                        world2.style.transition = 'opacity 1s ease-out-in';

                        // After the fade out animation completes, hide world 1 and fade in world 2
                        setTimeout(function () {
                            world2.style.display = 'none';
                            world2.style.transition = ''; // Reset transition property
                            world1.style.display = 'block';
                            world1.style.opacity = '1'; // Fade in world 2
                        }, 1000);
                    }
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
        setMainDialog.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
        setTimeout(hideMessage, 4 * sec, targetBubble, targetSound, setMainDialog);
    }
    /**
     * Hides message and pauze the audio
     * @param {getElementById} targetBubble 
     * @param {getElementById} targetSound 
     */
    function hideMessage(targetBubble, targetSound, setMainDialog) {
        targetSound.pause();
        targetBubble.innerText = "...";
        targetBubble.style.opacity = 0;

    }

}

//runGame();