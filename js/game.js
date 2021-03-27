/* Here I get all the DOM objects to work with later on */
const boxChoice = document.getElementsByTagName("img");
const topText = document.getElementsByClassName("game-text-style");
const scoreDisplayComputer = document.getElementById("score-computer");
const scoreDisplayPlayer = document.getElementById("score-player");
const playButton = document.getElementById("btn-txt");

/* Here all global variables are declared */ 
var computerScore = 0;
var playerScore = 0;
var playerChoice;
var computerChoice;

/* To initiate the game, I hide all the boxes (or cards) containing 
   the choices for the player and the computer. The game starts when the PLAY button is pressed */

hideAllCards();
playButton.addEventListener('click', play);

/* Button for the round is hidden */

function play(e){
    e.target.textContent = "REPLAY"
    e.target.style.visibility = "hidden";
    e.target.style.backgroundColor = "transparent";
    console.log(e);
    resetRound();

    /* For every player box I create an event listener for click. After event is fired,
    The round is played and the random function generates random choice by computer
    Then, the corresponding card appear on the computer side of the screen. */

    for(i=0;i<3;i++){
        boxChoice[i].addEventListener('click', hideOtherPlayerCards);
    }
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

        /* Scores are updated at the end of the round and the button becomes visible again. */

        scoreDisplayComputer.textContent = `${computerScore}`;
        scoreDisplayPlayer.textContent = `${playerScore}`;
        playButton.style.visibility = "visible";
        playButton.style.backgroundColor = "turquoise";
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
    for(i=3;i <6; i++){
        boxChoice[i].style.display = "none";
    }
}
function hideAllCards()
{
    for(i=0;i <6; i++){
        boxChoice[i].style.display = "none";
    }
}
function resetRound()
{
    showAllPlayerCards();
    hideComputerCards();
    playerChoice = "";
    computerChoice = "";
    for(i=0;i<6;i++)
    {
        boxChoice[i].style.border = "4px solid transparent";
    }
}
