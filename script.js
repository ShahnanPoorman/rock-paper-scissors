let humanScore = 0;
let computerScore = 0;


playGame()

function getComputerChoice(){
    let choice = Math.random()
    if(choice > 0.66){
        return "rock";
    }
    else if (choice < 0.33){
        return "scissors";
    }
    return "paper";
}

function getHumanChoice(){
    let choice = prompt("Rock, paper, or scissors?")

    if (choice === "rock"){
        return choice;
    }
    else if (choice === "paper"){
        return choice;
    }
    else if (choice === "scissors"){
        return choice;
    }
    else{
        let second_choice = getComputerChoice();
        console.log("Invalid choice! Picking for you!: " + second_choice);
        return second_choice;
    }
        
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("Draw")
        }
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissor" && computerChoice === "paper")) {
            console.log("You won a round");
            humanScore++;
        }
        else {
            console.log("You lost a round");
            computerScore++;
        }
    }

    for(let i = 1; i <=5; i++){
        playRound();
        console.log("Score: " + humanScore + " to " + computerScore);
    }

    if(humanScore === computerScore){
        console.log("It's a tie!")
        console.log("Score: " + humanScore + " to " + computerScore);
    }
    else if(humanScore > computerScore){
        console.log("You win!");
        console.log("Score: " + humanScore + " to " + computerScore);
    }
    else if(humanScore < computerScore){
        console.log("You lost!")
        console.log("Score: " + humanScore + " to " + computerScore);
    }
}