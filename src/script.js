function getComputerChoice()
{
    let rand = Math.floor(Math.random() * 3 + 1);

    if (rand === 1)
    {
        return 'Rock';
    }
    else if(rand === 2)
    {
        return 'Paper';
    }
    else
    {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection)
{
    if(playerSelection.toUpperCase() === 'ROCK')
    {
        if (computerSelection.toUpperCase() === 'SCISSORS')
        {
            return 'You Win! Rock beats Scissors.'
        }
        else if(computerSelection.toUpperCase() === 'PAPER')
        {
            return 'You Lose! Paper beats Rock.'
        }
        else
        {
            return 'Its a tie, both of you chose Rock.'
        }
    }
    else if(playerSelection.toUpperCase() === 'PAPER')
    {
        if (computerSelection.toUpperCase() === 'ROCK')
        {
            return 'You Win! Paper beats Rock.'
        }
        else if(computerSelection.toUpperCase() === 'SCISSORS')
        {
            return 'You Lose! Scissors beats Paper.'
        }
        else
        {
            return 'Its a tie, both of you chose Paper.'
        }
    }
    else if(playerSelection.toUpperCase() === 'SCISSORS')
    {
        if (computerSelection.toUpperCase() === 'PAPER')
        {
            return 'You Win! Scissors beats Paper.'
        }
        else if(computerSelection.toUpperCase() === 'ROCK')
        {
            return 'You Lose! Rock beats Scissors.'
        }
        else 
        {
            return 'Its a tie, both of you chose Scissors.'
        }
    }
    else
    {
        return "That not right at all! Enter Rock, Paper, or Scissors."
    }
}

function playGame()
{
    for (let i = 0; i < 5; i++)
    {
        const playerSelection = prompt("Rock, Paper, Scissors, Shoot!", "");
        const computerSelection = getComputerChoice();

        console.log("Player: " + playerSelection);
        console.log("Computer: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

playGame();