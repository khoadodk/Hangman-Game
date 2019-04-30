$(function(){
const words = ["strawberry","rasberry","blueberry","orange","apple","cherry","banana","pineapple"];

const maxTries = 6;
let currentWord = "";
let answerArray = [];


let word = words[Math.floor(Math.random() * words.length)];
for (let i = 0; i < word.length; i++) {
  answerArray.push('_');
  currentWord += answerArray[i];
  document.getElementById("currentWord").innerHTML = currentWord;
}

document.addEventListener('keypress', (event) => {
  //Set an empty array to store guessed letters
  let guessLetters = [];
  let keyword = String.fromCharCode(event.keyCode);
  //if user guesses correct
  if(word.indexOf(keyword) > -1 ){
    //add to the guessLetter array
    guessLetters.push(keyword);
    //replace underscore with the right letter
    answerArray[guessLetters.indexOf(keyword)] = keyword;
    //check to see if the random word matches guesses
    if (guessLetters.join('') === word) {
      alert('You win');
    }
  } else {
    let remainingGuesses = document.getElementById("remainingGuesses").innerHTML;
    remainingGuesses = maxTries;
    remainingGuesses--;
      if(remainingGuesses === 0){
        alert("You lost. Try again next time")
      }
  }
})
});
