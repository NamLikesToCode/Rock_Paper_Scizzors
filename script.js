
let playerwins = 0;
let computerwins = 0;
let gameties = 0;
let gamesPlayed= 0;



function getComputerChoice(){   
    const options = ['rock','paper','scissors'];
    const random = options[Math.floor(Math.random() * options.length)];
    // console.log(`Computer chose ${random}`);
    return random;
}


// function getPlayerChoice() {
//     //     let askPlayer = prompt('What is your choice?',)
//     //     console.log('Players turn')
//     //     console.log(`Player chose ${askPlayer}`);
//     //     return askPlayer.toLowerCase();
//     }
    
    
    
//     const playerSelection = getPlayerChoice();
//     // = getPlayerChoice();
    
    const computerSelection = getComputerChoice();

function playround(playerSelection,computerSelection){
    
        if(playerSelection == computerSelection){  
        gameties += 1;
        gamesPlayed += 1;
        console.log(`Tie Score: ${gameties}`);
        const results = document.querySelector(".Results");
        results.innerText = `You tied! You both picked ${playerSelection}`;
        
        let gameTies = document.querySelector("#gameties");
        gameTies.innerText = `Game Ties: ${gameties}`;
        let gamesplayed = document.querySelector("#gamesPlayed");
        gamesplayed.innerText = `Games Played: ${gamesPlayed}`;

        

    }else if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
              (playerSelection == 'scissors' && computerSelection == 'paper') || 
              (playerSelection == 'paper' && computerSelection == 'rock')){
                console.log('Player wins')
                playerwins += 1;
                gamesPlayed += 1;
                console.log(`Player Score: ${playerwins}`);
                const results = document.querySelector(".Results");
        results.innerText = `You WON! You picked ${playerSelection} while computer chose ${computerSelection}`;
        
        let gamesplayed = document.querySelector("#gamesPlayed");
        gamesplayed.innerText = `Games Played: ${gamesPlayed}`;


        let playerscore = document.querySelector("#playerscore");
        playerscore.innerText = ` Player Score: ${playerwins}`;
      
        
    } else {console.log('Computer wins')
            computerwins += 1;
            gamesPlayed += 1;
            console.log(`Computer Score ${computerwins}`);
            const results = document.querySelector(".Results");
            results.innerText = `You lose! You picked ${playerSelection} while computer chose ${computerSelection}`;   


         
        let computerScore = document.querySelector("#computerscore");
        computerScore.innerText = `Computer Score: ${computerwins}`;
        let gamesplayed = document.querySelector("#gamesPlayed");
        gamesplayed.innerText = `Games Played: ${gamesPlayed}`;
        
         }
}

// const firstRound = playround(playerSelection,computerSelection);

function game(){
    console.log('Game Start');
    for(let i = 0; gamesPlayed < 5; i++){
        
        playround();
        console.log(playround(playerSelection,computerSelection));        
        console.log(`Player Wins ${playerwins}`,`Computer Wins ${computerwins}`, `Game Ties: ${gameties}`)

    }
}

const checkForWinner = (playerwins,computerwins) => {
    if (playerwins === 5 && playerwins > computerwins) {
        const winner = document.querySelector("#Winner");
        winner.innerText = `You Won ${playerwins} to ${computerwins}, You defeated the computer`
    } 
    else if (computerwins === 5 && computerwins > playerwins){
        const winner = document.querySelector("#Winner");
        winner.innerText = `You Lose ${playerwins} to ${computerwins}, You were defeated by the computer`

    }
}



// game();

let rockButton = document.querySelector(".rockbutton");

let paperbutton = document.querySelector(".paperbutton");

let scissorsbutton = document.querySelector(".scissorsbutton")

const computerChoicediv = document.querySelector("ComputersChoice");

const results = document.querySelector(".Results")

rockButton.addEventListener("click", () => {
    const playerSelection = "rock";   
    const computerSelection = getComputerChoice();
    console.log("rock");
    playround(playerSelection,computerSelection)
    checkForWinner(playerwins,computerwins);
})

paperbutton.addEventListener("click", () => {
    const playerSelection = "paper";   
    const computerSelection = getComputerChoice();
    console.log("paper");
    playround(playerSelection,computerSelection)
    checkForWinner(playerwins,computerwins);
})

scissorsbutton.addEventListener("click", () => {
    const playerSelection = "scissors";   
    const computerSelection = getComputerChoice();
    console.log("scissors");
    playround(playerSelection,computerSelection)
    checkForWinner(playerwins,computerwins);
})




