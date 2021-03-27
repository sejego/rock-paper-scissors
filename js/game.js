const boxChoice = document.getElementsByTagName("img");
const topText = document.getElementsByClassName("game-text-style");
const scoreDisplayComputer = document.getElementById("score-computer");
const scoreDisplayPlayer = document.getElementById("score-player");
//const playButton = document.getElementById("btn-txt");

var i = 0;
var computerScore = 0;
var playerScore = 0;
var playerChoice;
var computerChoice;

// playButton.firstChild.addEventListener('click', );


    resetRound();
    for(i=0;i<3;i++){
        boxChoice[i].addEventListener('click', hideOtherPlayerCards);
    }

    function playRound()
    {
        computerChoice = computerPlay();
        showComputerCard(computerChoice);

        switch(computerChoice){
            case "paper-computer":

                if(playerChoice === "paper-player")
                    topText[0].textContent = "Tie" ;
                else if(playerChoice === "rock-player")
                {
                    computerScore++;
                    topText[0].textContent = "Paper beats rock. You lost!";
                }
                else if(playerChoice === "scissors-player")
                {
                    playerScore++;
                    topText[0].textContent = "Scissors beat paper. You won!";
                }
                break;
            
            case "rock-computer":

                if(playerChoice === "paper-player")
                {
                    playerScore++;
                    topText[0].textContent = "Paper beats rock. You won!";
                }
                else if(playerChoice === "rock-player")
                    topText[0].textContent = "Tie";
                else if(playerChoice === "scissors-player")
                {
                    computerScore++;
                    topText[0].textContent = "Rock beats scissors. You lost!";
                }
                break;
            
            case "scissors-computer":

                if(playerChoice === "paper-player")
                {
                    computerScore++;
                    topText[0].textContent = "Scissors beat paper. You lost!";
                }
                else if(playerChoice === "rock-player")
                {
                    playerScore++;
                    topText[0].textContent = "Rock bears scissors. You won!";
                }
                else if(playerChoice === "scissors-player")
                    topText[0].textContent = "Tie";
                break;
        }
        scoreDisplayComputer.textContent = `${computerScore}`;
        scoreDisplayPlayer.textContent = `${playerScore}`;
    }


function computerPlay(){

    let randNumber = Math.floor(Math.random() * 3); 
    switch(randNumber){
        case 0: 
            return "paper-computer";
        case 1:
            return "rock-computer";
        case 2:
            return "scissors-computer"
    }
}


function hideOtherPlayerCards(e)
{
    console.log(e.target.id);
    playerChoice = e.target.id;
    for(i=0;i<3;i++)
    {
        if(boxChoice[i].id != e.target.id)
            boxChoice[i].style.display = 'none';          
    }
    e.target.classList.add('active');
    playRound();
}
function showComputerCard(cardName)
{
    for(i=3; i<6; i++)
    {
        if(boxChoice[i].id == cardName)
            boxChoice[i].style.display = 'block';
            boxChoice[i].style.border = "4px solid red";
    }
}

function showAllPlayerCards()
{
    for(i=0; i<3; i++)
    {
        boxChoice[i].style.display = 'block';
    }
}

function hideComputerCards()
{
    // hide computer's choice
    for(i=3;i <6; i++){
        boxChoice[i].style.display = "none";
    }
}

function resetRound()
{
    showAllPlayerCards();
    hideComputerCards();
    playerChoice = "";
    computerChoice = "";
}