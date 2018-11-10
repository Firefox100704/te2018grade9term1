let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "plank",
  item: "flashlight",
  item2: null,
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} hears stories that accumalated around the town and ventures closer to the house once he heard the scream`);
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
  // continue the story
  console.log(`${player.name} searches the mysterious house`);
  console.log(`${player.name} finds bloods that tracks around the house leading towards each door`);
 console.log("you have three doors");

 let choice = READLINE.question("which door do you want to open? (door1 or door2 or door3)");

 if (choice == "door1"){
  console.log(`${player.name} player finds a note`);
  let note = READLINE.question("Does note help you find where screaming came from? (yes or no)");
  if (note == "yes"){ 
    console.log(`the note sends ${player.name} to door2`)
    choice = "door2" 
   }
  }
  if (choice == "door2"){
    console.log(`${player.name} finds bloody operating tools`);
    console.log(`${player.weapon} `)
  }
 console.log()
} 
else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...`);
  // continue the story
}
console.log("Thanks for playing!");