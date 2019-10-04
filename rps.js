
    
    let rounds = 5;
    let humanScore = 0;
    let computerScore = 0;

    function computerPlay() {
        let options = ['rock', 'paper', 'scissors'];
        return options[Math.floor(Math.random() * options.length)];
    }
    
    function playRound (playerSelection, computerSelection) {
        playerSelection = prompt('Choose Rock, Paper or Scissors');
        computerSelection = computerPlay();
        
        if (playerSelection === computerSelection) {
            alert('Draw');
        } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
                    (playerSelection == 'scissors' && computerSelection == 'paper') || 
                    (playerSelection == 'paper' && computerSelection == 'rock')) {
                        alert('You win the round! ' + playerSelection + ' beats ' + computerSelection);
                        humanScore++;
        } else if ((playerSelection == 'scissors' && computerSelection == 'rock') || 
                    (playerSelection == 'paper' && computerSelection == 'scissors') || 
                    (playerSelection == 'rock' && computerSelection == 'paper')) {
                        alert('You lost the round! ' + computerSelection + ' beats ' + playerSelection);
                        computerScore++;
        } else {
            alert('Please choose rock, paper or scissors!');
            
        }

        
    }
    function game() {
        for (let i = 0; i < rounds; i++) {
            playRound();
            rounds[i];
        }
        if (humanScore > computerScore) {
            humanScore - computerScore == 1 ? alert('Well done! You won by ' + (humanScore - computerScore) + ' point!') : 
                                            alert('Well done! You won by ' + (humanScore - computerScore) + ' points!');
            
        } else if (computerScore > humanScore) {
            computerScore - humanScore == 1 ? alert('Ups! Computer was smarter this time, winning by ' + (computerScore - humanScore) + ' point!') :
                                              alert('Ups! Computer was smarter this time, winning by ' + (computerScore - humanScore) + ' points!');  
        } else {
            alert('Draw');
        }
    }
    game();
    