// ul for guessed letters

const guessedLetters = document.querySelector(".guessed-letters");

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

// Paragraph with message displayed when a letter is guessed

const guessedLetter = document.querySelector(".message");

// Button that prompts you to play again

const playAgain = document.querySelector(".play-again");

// Test word prior to fetching from a hosted file

const word = "magnolia";


//Function to add placeholders for each letter

const createLetterPlaceholders = function(){ //solution code has given the function "word" as a parameter
  
    const  placeholders = [];

    for (const letter of word){
        console.log(letter);
        placeholders.push("●");
        //solution code : wordInProgress.innerText = placeholders.join(""); I chose the form below because the other version had comas in between the dots. 
        wordInProgress.innerText = `${placeholders.join("")}`;
        } 
    };
    createLetterPlaceholders(word);


    guessButton.addEventListener("click", function(e){
        e.preventDefault();
        const letterOfChoice = letterInput.value; 
        console.log(letterOfChoice); 
        letterInput.value = "";    //Empty the value of the input       
    });

