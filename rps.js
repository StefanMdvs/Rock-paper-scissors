
    
    let rounds = 5;
    let humanScore = 0;
    let computerScore = 0;

    function computerPlay() {
        let options = ['rock', 'paper', 'scissors'];
        return options[Math.floor(Math.random() * options.length)];
    }
        
    //console.log(playRound(playerSelection, computerSelection));

    function playRound (playerSelection, computerSelection) {
        playerSelection = prompt('choose rock, paper or scissors');
        computerSelection = computerPlay();
        
        if (playerSelection === computerSelection) {
            console.log('draw');
        } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
                    (playerSelection == 'scissors' && computerSelection == 'paper') || 
                    (playerSelection == 'paper' && computerSelection == 'rock')) {
                        console.log('you win! ' + playerSelection + ' beats ' + computerSelection);
                        humanScore++;
        } else if ((playerSelection == 'scissors' && computerSelection == 'rock') || 
                    (playerSelection == 'paper' && computerSelection == 'scissors') || 
                    (playerSelection == 'rock' && computerSelection == 'paper')) {
                        console.log('you lost! ' + computerSelection + ' beats ' + playerSelection);
                        computerScore++;
        } else {
            console.log('please choose rock, paper or scissors!');
            rounds--;
        }

        
    }
    function game() {
        /*while (rounds <= 5) {
            playRound();
            rounds++;
        }*/
        
        for (let i = 0; i < rounds; i++) {
            playRound();
            rounds[i];
        }
        if (humanScore > computerScore) {
            humanScore - computerScore == 1 ? alert('Well done! You won by ' + (humanScore - computerScore) + ' point!') : 
                                            alert('Well done! You won by ' + (humanScore - computerScore) + ' points!');
            
        } else if (computerScore > humanScore) {
            alert('Ups! Computer was smarter this time, winning by ' + (computerScore - humanScore) + ' points!');
        } else {
            alert('Draw');
        }
    }
    game();
    