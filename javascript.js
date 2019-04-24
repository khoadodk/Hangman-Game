$(function(){
var words = ["strawberry","rasberry","blueberry","orange","apple","cherry","banana","pineapple"];

const remainingGuesses = 6;
var guessingWordText = "";
var answerArray = [];


var word = words[Math.floor(Math.random() * words.length)];
for (var i = 0; i < word.length; i++) {
  answerArray.push('_');
  guessingWordText += answerArray[i];
  document.getElementById('currentWord').innerHTML = guessingWordText;
}

function evaluateGuess(letter){
  document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
  var guessLetters = [];
  for (let i = 0; i < word.length; i++){
    if(word[i] === letter){
      guessLetters.push(i);
    }
  }
  if (remainingGuesses == 0){
    remainingGuesses --;
    alert("You are out of guesses. Please try again!")
  } else {
    for (let i = 0; i < guessLetters.length; i++){
      answerArray[guessLetters[i]] = letter;
    }
  }
}
//  var remainingLetters = word.length;
//  while (remainingLetters > 0) {
//    alert(answerArray.join(" "));
//    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
//    if (guess === null) {
//     break;
//  } else if (guess.length !== 1) {
//    alert("Please enter a single letter.");
//  } else {
//    for (var j = 0; j < word.length; j++) {
//       if (word[j] === guess.toLowerCase()) {
//         answerArray[j] = guess.toLowerCase();
//         remainingLetters--;
//       }
//     }
//   }
// }
})
