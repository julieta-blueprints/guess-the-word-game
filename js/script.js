// ul for guessed letters

const guessedLettersContainer = document.querySelector(".guessed-letters");

// Guess! button 

const guessButton = document.querySelector(".guess");

// Text Input where you enter letter

const letterInput = document.querySelector(".letter");

// Paragraph containing the word in progress

const wordInProgress = document.querySelector(".word-in-progress");

// Paragraph displaying remaining guesses

const remaining = document.querySelector(".remaining");

// Span in the paragraph of remaing guesses

const remainingNum = document.querySelector(".remaining span");

// Paragraph with messages displayed in response to input 

const message = document.querySelector(".message");

// Button that prompts you to play again

const playAgain = document.querySelector(".play-again");

// Test word prior to fetching from a hosted file

const word = "magnolia";

// Array with all player's guesses 

const guessedLetters = [];



//Function to add placeholders for each letter

const createLetterPlaceholders = function(){ //solution code has given the function "word" as a parameter
  
    const  placeholders = [];

    for (const letter of word){
        console.log(letter);
        placeholders.push("●");
        wordInProgress.innerText = placeholders.join("");
        } 
    };
    createLetterPlaceholders(word);

 //Event listener for Guess! button

    guessButton.addEventListener("click", function(e){
        e.preventDefault();
        const letterOfChoice = letterInput.value; 
        console.log(letterOfChoice); 
        letterInput.value = "";    //Empty the value of the input     
        message.innerText = "";

        checkPlayersInput(letterOfChoice);  
        const resultOfCheckPlayersInput = checkPlayersInput(letterOfChoice);
        console.log(resultOfCheckPlayersInput);

        makeGuess(letterOfChoice);
    });

 // Function to check player's input

    const checkPlayersInput = function (letterOfChoice){
        const acceptedLetter = /[a-zA-Z]/; //Regular expression 
        const criteria = letterOfChoice.match(acceptedLetter);

        if (letterOfChoice === ""){
            message.innerText = "Go on! Enter a letter."
         } else if (letterOfChoice.length > 1) {  //.length applies to strings as a property!!!
            message.innerText = "Just one letter, please."
         } else if (letterOfChoice != criteria){ 
            message.innerText = "Please, enter a letter from A to Z"
        } else {
            return letterOfChoice;
        }
    };


    // Function to capture input

    const makeGuess = function(letter){
        const letterUpperCased = letter.toUpperCase();
       if (guessedLetters.includes(letterUpperCased)){
        message.innerText = "You've already guessed that letter, doughnut. Try again.";
        } else {
        guessedLetters.push(letterUpperCased);
        console.log(guessedLetters);}
       

    };