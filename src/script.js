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

function(playerSelection, computerSelection)
{
    playerSelection.toUppercase()
    computerSelection.toUppercase()
    
    if(playerSelection === 'ROCK')
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
    else if(playerSelection === 'PAPER')
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

    }
}