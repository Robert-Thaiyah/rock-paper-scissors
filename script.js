let playGame  = confirm("Shall we play a game??!!!")
if (playGame) {
    //play
    let playerChoice = prompt("Please enter rock, paper, or scissors");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase(); //trim eliminates white space
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock"
            : computerChoice === 2 ? "paper"
            : "scissors";

            let result = 
playerOne === computer ? `playerOne: ${playerOne}\n computer: ${computer}\n tie draw`
: playerOne === "rock" && computer === "paper" 
?`playerOne: ${playerOne}\n computer: ${computer}\n computer wins`
: playerOne === "paper" && computer === "scissors" 
? `playerOne: ${playerOne}\n computer: ${computer}\n computer wins`
: playerOne === "scissors" && computer === "rock" 
? `playerOne: ${playerOne}\n computer: ${computer}\n computer wins`
: `playerOne: ${playerOne}\n computer: ${computer}\n player wins`

alert(result);
let playAgain = confirm("Play another round?");
function playRound() {
    for (let i = 0; i < playRound; i++) {
        playAgain ? location.reload() : alert("Thanks for playing!!");
     }
}
// playAgain ? location.reload() : alert("Thanks for playing!!");
        } else {
            alert("You didn't enter a valid choice. Try again!");
        }
    } else {
        alert("Sad you changed your mind. Till Next time.");
    }
    } else {
    alert("Sad to see you not play. Till next time!!");
}