const boxChoice = document.getElementsByTagName("img");
const topText = document.getElementsByClassName("game-text-style");

var i = 0;
var computerScore = 0;
var playerScore = 0;

function hideOtherPlayerCards(e)
{
    console.log(e.target.id);
    for(i=0;i<3;i++)
    {
        if(boxChoice[i].id != e.target.id)
            boxChoice[i].style.display = 'none';           
    }
    e.target.classList.add('active');

}
// hide computer's choice
for(i=3;i <6; i++){
    boxChoice[i].style.display = "none";
}

for(i=0;i<3;i++){
    boxChoice[i].addEventListener('click', hideOtherPlayerCards);
}
/*
while(i < 5){
    if(choice == "rock-player" || choice == "paper-player" || choice == "scissors-player")
    {
        let computerChoice = computerPlay();
        alert(playRound(choice, computerChoice));
        i++;
    }
    else{
        alert("Invalid input. Try again typing rock, paper or scissors");
    }
}
if(computerScore>playerScore)
    alert("Computer has won! Give it one more try!");
else if(playerScore>computerScore)
    alert("You won! Congratulations! Play one more?");
else
    alert("It is a tie! Play again to show who is the boss!");

    function computerPlay(){

        let randNumber = Math.floor(Math.random() * 3); 

        switch(randNumber){
            case 0: 
                return "paper";
                break;
            case 1:
                return "rock";
                break;
            case 2:
                return "scissors"
                break;
        }
    }

    function playRound(playerSel, computerSelection){

        let playerSelection = playerSel.toLowerCase();

        switch(computerSelection){
            case "paper":

                if(playerSelection === "paper")
                    return "Tie";
                else if(playerSelection === "rock")
                {
                    computerScore++;
                    return "Paper beats rock. You lost!";
                }
                else if(playerSelection === "scissors")
                {
                    playerScore++;
                    return "Scissors beat paper. You won!";
                }
                break;
            
            case "rock":

                if(playerSelection === "paper")
                {
                    playerScore++;
                    return "Paper beats rock. You won!";
                }
                else if(playerSelection === "rock")
                    return "Tie";
                else if(playerSelection === "scissors")
                {
                    computerScore++;
                    return "Rock beats scissors. You lost!";
                }
                break;
            
            case "scissors":

                if(playerSelection === "paper")
                {
                    computerScore++;
                    return "Scissors beat paper. You lost!";
                }
                else if(playerSelection === "rock")
                {
                    playerScore++;
                    return "Rock bears scissors. You won!";
                }
                else if(playerSelection === "scissors")
                    return "Tie";
                break;
        }
    }
    */