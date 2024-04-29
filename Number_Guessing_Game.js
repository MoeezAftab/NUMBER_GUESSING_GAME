#!/usr/bin/env node
import inquirer from "inquirer";
let roundNumber = Math.floor((Math.random() * 4) + 1);
let userInput = await inquirer.prompt({
    type: 'number',
    name: 'guessedNumber',
    message: 'guess a number between 1 -4'
});
if (userInput.guessedNumber === roundNumber) {
    console.log(`Congratulation! You Guessed Correctly!`);
}
else {
    console.log(`Sorry! Try next time. Correct Ans is: ${roundNumber}`);
}
