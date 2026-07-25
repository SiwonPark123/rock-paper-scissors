var playerChoice = "";
var botPossibleChoices = ["rock", "paper", "scissors"];
var botChoiceIndex = 0;
var botChoice = "";
var result = "";
var playerScore = 0;
var botScore = 0;

function selectPlayerChoice(choice) {
    playerChoice = choice;
    console.log(playerChoice);
}

function determineBotChoice() {
    botChoiceIndex = Math.floor(Math.random() * botPossibleChoices.length)
    botChoice = botPossibleChoices[botChoiceIndex];
    console.log(botChoice);
}

function determineWinner() {
    if (playerChoice == "rock" && botChoice == "scissors") {
        result = "player";
    } else if (playerChoice == "rock" && botChoice == "rock") {
        result = "tie";
    } else if (playerChoice == "rock" && botChoice == "paper") {
        result = "bot";
    } else if (playerChoice == "paper" && botChoice == "rock") {
        result = "player";
    } else if (playerChoice == "paper" && botChoice == "paper") {
        result = "tie";
    } else if (playerChoice == "paper" && botChoice == "scissors") {
        result = "bot";
    } else if (playerChoice == "scissors" && botChoice == "paper") {
        result = "player";
    } else if (playerChoice == "scissors" && botChoice == "scissors") {
        result = "tie";
    } else if (playerChoice == "scissors" && botChoice == "rock") {
        result = "bot";
    }
}

function displayResult() {
    if (result == "player") {
        playerScore++;
    } else if (result == "bot") {
        botScore++;
    }

    if (result == "player") {
        document.getElementById("result").textContent = "Player Win!";
        document.getElementById("playerScore").textContent = playerScore;
        document.body.style.backgroundColor = "lightblue";
    } else if (result == "tie") {
        document.getElementById("result").textContent = "Tie!";
        document.body.style.backgroundColor = "gray";
    } else {
        document.getElementById("result").textContent = "Bot Win...";
        document.getElementById("botScore").textContent = botScore;
        document.body.style.backgroundColor = "darkred";
    }
}