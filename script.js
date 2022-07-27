var userScore = document.getElementById('userScore');
var botScore = document.getElementById('botScore');

var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');

document.addEventListener('click', battle);

function battle (input) {
    var userChoice = '';
    var button = input.target.id;
    var botChoice = '';
    var ran = Math.floor(Math.random() * 3);
    var outcome = '';

    switch (button) {
        case 'rockButton':
            userChoice = 'rock';
            break;
        case 'paperButton':
            userChoice = 'paper';
            break;
        case 'scissorsButton':
            userChoice = 'scissors';
            break;
        default:
            return;
    }
    
    switch(ran) {
        case 0:
            botChoice = 'rock';
            break;
        case 1:
            botChoice = 'paper';
            break;
        case 2:
            botChoice = 'scissors';
            break;
    }

    if (userChoice === botChoice) {
        outcome = 'tie';
    } else if(((userChoice === 'rock') && (botChoice === 'scissors')) || ((userChoice === 'paper') && (botChoice === 'rock')) || ((userChoice === 'scissors') && (botChoice === 'paper'))) {
        userScore++;
        outcome = 'won';
    } else {
        botScore++;
        outcome = 'lost';
    }

    document.getElementById('botScore').innerHTML = botScore + 0;
    document.getElementById('userScore').innerHTML = userScore + 0;
    document.getElementById('botChoice').innerHTML = botChoice;

    switch(outcome) {
        case 'tie':
            document.getElementById('outcome')
    }
}