//EVENT LISTENER FOR CLICK EVENT OF BUTTON
document.getElementById("check").addEventListener("click", validateGuess);
document.getElementById("start").addEventListener("click", newGame);

//DECLARE VARIABLES
let pickedNumber = 0;
const maxTries = 10;
let count = 0;
let gameOver = false;

//CALL FUNCTION TO START THE GAME
newGame();

//CREATE FUNCTION TO VALIDATE USER'S GUESSESS
function validateGuess(){
  let message = "";

  //GET THE USER'S GUESS FROM THE TEXT BOX
  const userGuess = parseInt(document.getElementById("guess").value);
// console.log("The user guess  is " + userGuess);
// console.log("type is " + typeof(userGuess));

  //COMPARE USER'S GUESS TO PICKED NUMBER
  if(pickedNumber == userGuess){
    message = "Nice one! you guessed right"
    gameOver = true;
    
//RE-ENABLE THE START NEW GAME BUTTON IF THE ABOVE CONDITION IS MET ALREADY
document.getElementById("start").disabled = false;
    
  } 
  else if(userGuess<pickedNumber){
    message = "uhmmm... Too low"
  } 
  else{
    message = "Oops! Too high"
  }

//INCREMENT COUNTER
  count++; //THIS IS SAME AS count = count + 1; or count += 1;
  console.log(count);
//   console.log(message);

  //THIS CHECKS IF THE USER IS OUT OF TRIALS
  if (count == maxTries && gameOver == false){
    message = "Sorry, you are out of trials. The number was " + pickedNumber;   
//RE-ENABLE THE START NEW GAME BUTTON IF THE ABOVE CONDITION IS MET ALREADY
document.getElementById("start").disabled = false;
  }
  
//DISPLAY THE OUTCOME OF USER'S GUESSESS 
document.getElementById("msg").textContent=message;
} //THE CHECKGUESS ENDS HERE

//CREATING A FUNCTION TO RE-ENABLE THE START NEW GAME BUTTON TO REFRESH THE GAME FOR A NEW USER
function newGame(){
  //console.log("new game");
document.getElementById("start").disabled = true;
  
//GENERATE A NEW RANDOM NUMBER TO GUESS BETWEEN 1 TO 100
pickedNumber = 1 + Math.floor(Math.random()*100);
console.log("The Picked number for this round is " + pickedNumber);

//RESET VARIABLES  
count = 0;
gameOver = false;
}