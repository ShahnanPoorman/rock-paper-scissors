let humanScore = 0;
let computerScore = 0;


const rpc = document.querySelector('.selections');
const results = document.querySelector('#results');
const score = document.querySelector('#score');

rpc.addEventListener('click', (e) => {
    console.log(e.target.id);
    playRound(e.target.id)
})




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

function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {
    const result = document.createElement('p');
    humanChoice = humanChoice.toLowerCase();

    if (Math.max(humanScore, computerScore) == 5) {
        humanScore = computerScore = 0;
        results.textContent = '';
    }

    if (humanChoice === computerChoice) {
        result.textContent = (`Round Draw! ${humanChoice} vs. ${computerChoice}!`)
        results.prepend(result);
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        result.textContent = (`Round Won! ${humanChoice} vs. ${computerChoice}!`);
        results.prepend(result);
        humanScore++;
    }
    else {
        result.textContent = (`Round Lost! ${humanChoice} vs. ${computerChoice}!`);
        results.prepend(result);
        computerScore++;
    }

    if(Math.max(humanScore, computerScore) == 5){
        if(humanScore == 5){
            results.prepend(`HUMAITY WINS!`)
        }
        else{
            results.prepend(`ROBITICY WINS!`)
        }
    }

    score.textContent = (`${humanScore} - \n ${computerScore}`);
}

function playGame(){ //plays 

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

