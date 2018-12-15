const READLINE = require("readline-sync");

/**** Problem 1 ****
Write a function that prints values from 10 to 0, counting down. Use a while
loop!
*/
function countdown() {
let i = 10
while(i =<0){
	console.log(i)
	i--;
}
}

// Test below
countdown();

/**** Problem 2 ****
Write a function that asks the user to enter a secret password. Until the user
enters the correct password, the program will keep asking for all eternity!
When they finally do enter the correct password, exit the loop and print a
congratulatory message.
*/
function getPassword() {

}

// Test below
//getPassword();

/**** Problem 3 ****
Enhance your function above to only allow the user to try entering the correct
password three times. If they fail three times, the program should kick them
out and tell them they are a robot. Otherwise it should give them the same
congratulatory message above.
*/
function getPasswordEnhanced() {

}

// Test below
//getPasswordEnhanced();

/**** Problem 4 ****
As a final enhancement, make it so when the user enters the wrong password, the
program tells them that they are wrong, along with how many attempts they
have left.
*/
function getPasswordFinal() {

}

// Test below
//getPasswordFinal() ;
