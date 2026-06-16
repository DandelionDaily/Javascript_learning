let randomNumber= parseInt(Math.random() * 100 + 1);

const submit =document.querySelector("#submit");
const userInput = document.getElementById("guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHig = document.querySelector(".lowOrHig");
const startOver = document.querySelector(".result");

const p =document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true; 

if(playGame){
  submit.addEventListener('click', function(event){
    event.preventDefault();
    const guess= parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);

  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number.');
  } else if(guess<1 || guess>100){
    alert("Please enter number between 1 and 100.");
  } else{
    prevGuess.push(guess);
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();}
      else{
        displayGuess(guess);
        checkGuess(guess);
      }
    }
  }



function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
    
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOO High`);
  }
}

function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML =`${11 - numGuess}`;

}

function displayMessage(message){
   lowOrHig.innerHTML =`<h2>${message} <h2>`;
}

function endGame(){
  userInput.value= '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame"> Start New Game <h2>`;
  startOver.appendChild(p);
  playGame= false;
  newGame();
} 

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e){
    randomNumber= parseInt(Math.random() * 100 + 1);
    prevGuess= [];
    numGuess = 1;
    guessSlot.innerHTML= '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;


  });

}

