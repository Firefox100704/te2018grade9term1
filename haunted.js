const READLINE = require("readline-sync");

// use whatever properties you 
let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  health: 100,
  weapon: "fists",
  item: "flashlight",
};

let player2 = {
  name: undefined,
  courage: 3,
  intellect: 10,
  strength: 5,
  health: 100,
  charm: 19,
  weapon: "metal pole",
  item: "flashlight",
};  
console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
  if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
  console.log(`${player.name} see's a survivor geting attacked by a zombie `)
  let survivor = READLINE.question("will you save: ")
    if(survivor == "n" || survivor == "no"){
    console.log(` Runs seeing the survivor geting eaten but with all the noise you made`)
    console.log(`${player.name} a few zombies follow you running to get you`)
    let running = READLINE.question("will you run or fight: " )
      if(running == "fight"){
      console.log(" you try to fight them off but they bite your arm")
      console.log("slowly bringing you down you become a zombie roaming the building")
      console.log("thanks for playing you got the zombie ending")
      }
        if(running == "run"){
          console.log("you ran away out the house in the forest but now your lost in the forest")
          console.log(" Thanks for playing you got (lost ending)")}
}
if(survivor == "y" || survivor == "yes"){
player.courage++;
console.log(`${player.name} saves the survivor by finding a bat on the floor and picks it up hiting the zombie`)
player.weapon = "bat"
 player.strength++;
player2.name = READLINE.question("what is the survivors name: ")
console.log(`thanks for saving me, my name is ${player2.name}`)
console.log("some zombies appear trying to fight")
let fight2 = READLINE.question("do you fight or run: ")

  if(fight2 == "Run" || fight2 == "run"){
  console.log(`you and ${player2.name} run from the zombies but ${player2.name} trips`)
  let help = READLINE.question(`do you help ${player2.name} or keep running`)
    if(help == "help" || help == "Help"){
    console.log(`your arm gets biten helping ${player2.name} the zombies jump on you and`)
    console.log(`${player2.name} runs away not helping you`)
    console.log("thanks for playing you got the (betrade ending)"
}
      if(help == "keep running" ||help == "run"){
      console.log(` ${player.name} Runs seeing ${player2.name} geting eaten but with all the noise you made`)
      console.log(`a few more zombies follow you running to get you`)
      let running2 = READLINE.question("will you run or fight: " )
if(running2 == "fight"){
console.log(" you try to fight them off but they bite your arm")
console.log("slowly bringing you down you become a zombie roaming the building")
console.log("thanks for playing you got the (secound zombie ending)")
}
if(running2 == "run"){
  console.log("you ran away out the house in the woods but now your lost in the woods")
  console.log("Thanks for playing you got (secound lost ending)")}
}

if(fight2 == "fight" || fight2 == "Fight"){
console.log(`you and ${player2.name} fight some zombies`)
console.log(`you and ${player2.name} fight the zombies off but you got hurt`)
player.health = (player.health - 30);
console.log(`${player2.name} gets up "I know a base where we can escape from here but it`)
console.log("will be riskey")
let base = READLINE.question("do you go? (yes or no)")
if(base == "yes" || base == "Yes"){
console.log(`you start following ${player2.name} there are zombies and other things in the way`)
let go = READLINE.question("so you go run and gun or sneaky")
if(go == "run and gun" || go == "Run and Gun"){
console.log(`you and ${player2.name} run around killing the zombies you finaly reach the base`)
console.log(`but you lost some health`)
player.health = (player.heath - 40);
}



}
if(base == "no" || base == "No"){

console.log("hi")

}
}










}


  // continue the story

}else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...`);
  // continue the story
console.log(`${player.name} is confrounted with another door... will you open item`);
let door = READLINE.question("do you want to open the door? yes or no ");
if(door == "yes" || door == "open"){
  console.log("you opened the door and found a sword")
  player.weapon = "sword"
console.log("do you investigate the yelling now")
let investigate = READLINE.question("yes or no ")
}
if(door == "no" || door == "No"){
console.log("you find a car with gas do you leave")
let leave = READLINE.question("yes or no ")
if(leave == "yes" || leave == "Yes"){



}
if(leave == "no" || leave == "No"){
 console.log("you hear a strange melody play and jason appears trying to kill you")


}

}


}
console.log("Thanks for playing!");
