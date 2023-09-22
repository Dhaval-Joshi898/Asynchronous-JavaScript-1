const emojiDetails = [
    { description: "Smiling face with sunglasses", emoji: "😎" },
    { description: "Thumbs up", emoji: "👍" },
    { description: "Heart eyes", emoji: "😍" },
    { description: "Crying face", emoji: "😢" },
    { description: "Party popper", emoji: "🎉" },
    // Add more emoji descriptions here
  ];
  
    let currentEmojiIndex = 0;
    let score = 0;
    //
  
  
    //
    const guessInput = document.getElementById("guess-input");
    const resultElement = document.getElementById("result");
    const scoreElement = document.getElementById("score");
  
    function displayEmoji() {
      const descriptionElement = document.getElementById("description");
      descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
    }
  
    function checkGuess() {
      const guess = guessInput.value.trim().toLowerCase();
      const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();
  
      if (guess === correctEmoji) {
        resultElement.textContent = "Correct!";
        score++;
      } else {
        resultElement.textContent = "Wrong!";
      }
      console.log(score);
      scoreElement.textContent = `Score: ${score}`;
      guessInput.value = "";
      guessInput.focus();     //after enter ing this will focus on textbox so to depict that enter value in textbox
      /**What is the purpose of the focus() method?.
        It moves the cursor to the input element.
        Solution Description:Using the focus methods, the cursor will be placed inside the input field, allowing the user to start typing their guess without needing to click on the input field manually. */
      nextEmoji();
    }
  
    function nextEmoji() {
      currentEmojiIndex++;
  
      if (currentEmojiIndex === emojiDetails.length) {
        currentEmojiIndex = 0;
        score=0;
      }
  
      displayEmoji();
    }
  
    document
      .getElementById("guess-input")
      .addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          checkGuess();
        }
      });
  
    document.addEventListener("DOMContentLoaded", () => {
      displayEmoji();
    });
  