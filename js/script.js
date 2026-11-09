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

    const checkPlayersInput = function (letterOfChoice){ // solution code simply used "input" as a parameter 
        //Regular expression 
        const acceptedLetter = /[a-zA-Z]/; 

        //Checks through a funnel of worse case scenarios: 1. If input is empty and prompts, 
        // 2. If more than one character has been entered and prompts, 
        // 3. Whether the input passes the test against the regular expression, i.e, a letter from a to z and prompts.
        // 4. Else returns the input as the player's choice
    
        if (letterOfChoice === ""){
            message.innerText = "Go on! Enter a letter."
         } else if (letterOfChoice.length > 1) {  //.length applies to strings as a property!!!
            message.innerText = "Just one letter, please."
         } else if (!letterOfChoice.match(acceptedLetter)){ 
            message.innerText = "Please, enter a letter from A to Z"
        } else {
            return letterOfChoice;
        }
    };


    // Function to capture input

    const makeGuess = function(letter){ // "accepts a letter as a parameter"–solution code replaces "letter" for "guess" as a parameter and then uses it directly to reassign the value. 
        const letterUpperCased = letter.toUpperCase();
       if (guessedLetters.includes(letterUpperCased)){
        message.innerText = "You've already guessed that letter, doughnut. Try again.";
        } else {
        guessedLetters.push(letterUpperCased);
        console.log(guessedLetters);
        showGuessedLetters();
        updateWordInProgress(guessedLetters);
        }  
    };

    //Function to Show Guessed Letters updating page with each new guess

    const showGuessedLetters = function () {
        guessedLettersContainer.innerHTML = "";
        
        for (const letter of guessedLetters){
            const li = document.createElement("li");
            li.innerText = letter; 
            guessedLettersContainer.append(li);
        }
    };

    // Function to update the word in progress 

    const updateWordInProgress = function (guessedLetters) {

        const wordUpper = word.toUpperCase();
        const wordArray = wordUpper.split("");

        console.log(wordArray);

        const forSwapping = [];
        
        for (const letter of wordArray){
            if (guessedLetters.includes(letter)){
                forSwapping.push(letter);
            } else {
                forSwapping.push("●");
            }
        }

        wordInProgress.innerText = forSwapping.join("");

        checkIfPlayerWon();

    };

    //Function to check if player has won 

    const checkIfPlayerWon = function (){3

         if (wordInProgress.innerText === word.toUpperCase()){
            message.classList.add("win");
            message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;
        }
        
    }

