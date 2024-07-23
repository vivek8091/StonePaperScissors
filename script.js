let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

// Getting Computer Choice (Randomly).
const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
}

// If game is draw.
const drawGame = () => {
    // console.log("Game Is Draw");
    const partyPoppersEmoji = String.fromCodePoint(128552);
    let previousMsg = msg.innerText;
    msg.innerText = "Game Is Draw!!!" + partyPoppersEmoji;
    msg.style.backgroundColor = "gray";
    setTimeout(function() {
        msg.innerText = previousMsg; // Clear message after 3 seconds
        msg.style.backgroundColor = ""; // Reset background color
      }, 2000); 
}

// Showing Winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        // console.log("You Win!");
        userScore++;
        userScorePara.innerText = userScore;
        let previousMsg = msg.innerText;
        // console.log("You Win!", userScore);
        const partyPoppersEmoji = String.fromCodePoint(128519);
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}` + partyPoppersEmoji;
        msg.style.backgroundColor = "green";
        setTimeout(function() {
            msg.innerText = previousMsg;
            msg.style.backgroundColor = "";
          }, 2000); 
    } else {
        // console.log("You Lose!");
        compScore++;
        compScorePara.innerText = compScore;
        let previousMsg = msg.innerText;
        // console.log("Computer Won", compScore);
        const partyPoppersEmoji = String.fromCodePoint(128532);
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}` + partyPoppersEmoji;
        msg.style.backgroundColor = "red";
        setTimeout(function() {
            msg.innerText = previousMsg;
            msg.style.backgroundColor = "";
          }, 2000); 
    }
}

// Playing Game.
const playGame = (userChoice) => {
    // console.log("User choice = ", userChoice);
    const compChoice = genComputerChoice();
    // console.log("Compter choice =", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // if (compChoice === "paper") {
            //     userWin = false;
            // } else {
            //     userWin = true;
            // }
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // if (compChoice === "scissors") {
            //     userWin = false;
            // } else {
            //     userWin = true;
            // }
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // if (compChoice === "rock") {
            //     userWin = false;
            // } else {
            //     userWin = true;
            // }
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
// Getting bUser Choice.
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});