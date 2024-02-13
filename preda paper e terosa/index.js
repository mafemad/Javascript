const choices = ['pedra', 'papel', 'tesoura'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("result");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(choice){
    const compChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(choice === compChoice){
        result = "Empatou!";

    }
    else{
        switch(choice){
            case 'pedra':
                result = (compChoice === 'tesoura') ? 'Voce ganhou!' : "voce perdeu!";
                break;

            case 'papel':
                result = (compChoice === 'pedra') ? 'Voce ganhou!' : "voce perdeu!";
                break;

            case 'tesoura':
                result = (compChoice === 'papel') ? 'Voce ganhou!' : "voce perdeu!";
                break;
            
        }
    }

    playerDisplay.textContent = `Jogador: ${choice}`;
    computerDisplay.textContent = `Computador: ${compChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("verde", "vermelho");

    switch(result){
        case 'Voce ganhou!':
            resultDisplay.classList.add("verde");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;

         case "voce perdeu!":
            resultDisplay.classList.add("vermelho");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}