function getComputerChoice()
{
    let rand = Math.floor(Math.random() * 3 + 1);

    if (rand === 1)
    {
        return 'ROCK';
    }
    else if(rand === 2)
    {
        return 'PAPER';
    }
    else
    {
        return 'SCISSORS';
    }
}

function playRound(playerSelection, computerSelection)
{
    if(playerSelection.toUpperCase() === 'ROCK')
    {
        if (computerSelection === 'SCISSORS')
        {
            return 'You Win! Rock beats Scissors.'
        }
        else if(computerSelection === 'PAPER')
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
        if (computerSelection === 'ROCK')
        {
            return 'You Win! Paper beats Rock.'
        }
        else if(computerSelection === 'SCISSORS')
        {
            return 'You Lose! Scissors beats Paper.'
        }
        else
        {
            return 'Its a tie, both of you chose Paper.'
        }
    }
    else
    {
        if (computerSelection === 'PAPER')
        {
            return 'You Win! Scissors beats Paper.'
        }
        else if(computerSelection === 'ROCK')
        {
            return 'You Lose! Rock beats Scissors.'
        }
        else
        {
            return 'Its a tie, both of you chose Scissors.'
        }
    }
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));