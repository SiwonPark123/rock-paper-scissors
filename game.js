var playerChoice = "";
var botPossibleChoices = ["Rock", "Paper", "Scissors"];
var botChoiceIndex = 0;
var botChoice = "";
var result = "";
var playerScore = 0;
var botScore = 0;

function selectPlayerChoice(choice) {
    playerChoice = choice;
    document.getElementById("playerChoice").textContent = playerChoice;
}

function determineBotChoice() {
    botChoiceIndex = Math.floor(Math.random() * botPossibleChoices.length);
    botChoice = botPossibleChoices[botChoiceIndex];
    document.getElementById("botChoice").textContent = botChoice;
}

function determineWinner() {
    if (playerChoice == "Rock" && botChoice == "Scissors") {
        result = "player";
    } else if (playerChoice == "Rock" && botChoice == "Paper") {
        result = "bot";
    } else if (playerChoice == "Paper" && botChoice == "Rock") {
        result = "player";
    } else if (playerChoice == "Paper" && botChoice == "Scissors") {
        result = "bot";
    } else if (playerChoice == "Scissors" && botChoice == "Paper") {
        result = "player";
    } else if (playerChoice == "Scissors" && botChoice == "Rock") {
        result = "bot";
    } else if (playerChoice == botChoice) {
        result = "tie";
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