console.log('Hello');

let playerwins = 0;
let computerwins = 0;
let gameties = 0;
let gamesPlayed= 0;

const options = ['rock','paper','scissors'];

function getComputerChoice(options){
    const random = options[Math.floor(Math.random() * options.length)];
    console.log(`Computer chose ${random}`);
    return random;
}


function getPlayerChoice() {
    let askPlayer = prompt('What is your choice?',)
    console.log('Players turn')
    console.log(`Player chose ${askPlayer}`);
    return askPlayer.toLowerCase();
}

const playerSelection = getPlayerChoice();

const computerSelection = getComputerChoice(options);

function playround(playerSelection,computerSelection){
    if(playerSelection == computerSelection){
        console.log('It is a tie');
        gameties += 1;
        gamesPlayed += 1;
        console.log(`Tie Score: ${gameties}`);
    }else if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
              (playerSelection == 'scissors' && computerSelection == 'paper') || 
              (playerSelection == 'paper' && computerSelection == 'rock')){
                console.log('Player wins')
                playerwins += 1;
                gamesPlayed += 1;
                console.log(`Player Score: ${playerwins}`);
    } else {console.log('Computer wins')
            computerwins += 1;
            gamesPlayed += 1;
            console.log(`Computer Score ${computerwins}`);    }
}

const firstRound = playround(playerSelection,computerSelection);

function game(){
    console.log('Game Start');
    for(let i = 0; i < 5; i++){
        
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice(options);

        console.log(playround(playerSelection,computerSelection));        
        

    }
}

game();


