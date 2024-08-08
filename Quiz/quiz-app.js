// Define an array of quiz questions and answers
const quiz = [
  {
    question: "What is the capital of France?",
    ans1: "Berlin",
    ans2: "Madrid",
    ans3: "Paris",
    ans4: "Lisbon",
    correctAns: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    ans1: "Earth",
    ans2: "Mars",
    ans3: "Jupiter",
    ans4: "Saturn",
    correctAns: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    ans1: "Atlantic Ocean",
    ans2: "Indian Ocean",
    ans3: "Arctic Ocean",
    ans4: "Pacific Ocean",
    correctAns: "Pacific Ocean",
  },
  {
    question: "Who wrote 'Hamlet'?",
    ans1: "Charles Dickens",
    ans2: "Jane Austen",
    ans3: "William Shakespeare",
    ans4: "Mark Twain",
    correctAns: "William Shakespeare",
  },
  {
    question: "What is the square root of 64?",
    ans1: "6",
    ans2: "7",
    ans3: "8",
    ans4: "9",
    correctAns: "8",
  },
];

// Select DOM elements for displaying the quiz question and answer options
const option1 = document.querySelector(".text_option_a");
const option2 = document.querySelector(".text_option_b");
const option3 = document.querySelector(".text_option_c");
const option4 = document.querySelector(".text_option_d");
const questionElement = document.querySelector(".quiz-question");
const submit = document.querySelector("#submit");

// Initialize variables to track the current question index and the user's score
let currentQuestion = 0;
let score = 0;

// Function to display the current question and its answer options
function displayQuestion() {
  // Update the question text
  questionElement.textContent = quiz[currentQuestion].question;
  // Update the answer options text
  option1.textContent = quiz[currentQuestion].ans1;
  option2.textContent = quiz[currentQuestion].ans2;
  option3.textContent = quiz[currentQuestion].ans3;
  option4.textContent = quiz[currentQuestion].ans4;
}

// Call the function to display the first question
displayQuestion();

// Select all radio button elements (answers)
const answerElements = document.querySelectorAll(".answer");

// Add an event listener to each answer option
answerElements.forEach((answerElement) => {
  answerElement.addEventListener("click", () => {
    // Uncheck all other radio buttons when one is clicked
    answerElements.forEach((element) => {
      element.checked = false; // Uncheck each radio button
    });
    // Check the clicked radio button
    answerElement.checked = true; // Check the clicked radio button
  });
});

// Add an event listener for the submit button
submit.addEventListener("click", () => {
  // Get the selected radio button
  const selectedOption = document.querySelector('input[type="radio"]:checked');

  // Check if an option is selected
  if (!selectedOption) {
    alert("Select an answer"); // Alert the user to select an answer
    return; // Exit the function if no option is selected
  }

  // Get the text of the selected answer
  const selectedAnswer = selectedOption.nextElementSibling.textContent;

  // Check if the selected answer is correct
  if (selectedAnswer === quiz[currentQuestion].correctAns) {
    score++; // Increment the score if the answer is correct
  }

  // Make sure that all options are uncheked when we move to next set
  selectedOption.checked = false;

  // Move to the next question
  currentQuestion++;

  // Check if there are more questions to display
  if (currentQuestion < quiz.length) {
    displayQuestion(); // Display the next question
  } else {
    // If there are no more questions, show the final score
    alert(`Your score is ${score} out of ${quiz.length}`);

    location.reload(); // Reload the page to restart the quiz
  }
});
