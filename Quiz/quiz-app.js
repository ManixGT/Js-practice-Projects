const array = [
  {
    questions: "What is the capital of France?",
    ans1: "Berlin",
    ans2: "Madrid",
    ans3: "Paris",
    ans4: "Lisbon",
    correctAns: "Paris",
  },
  {
    questions: "Which planet is known as the Red Planet?",
    ans1: "Earth",
    ans2: "Mars",
    ans3: "Jupiter",
    ans4: "Saturn",
    correctAns: "Mars",
  },
  {
    questions: "What is the largest ocean on Earth?",
    ans1: "Atlantic Ocean",
    ans2: "Indian Ocean",
    ans3: "Arctic Ocean",
    ans4: "Pacific Ocean",
    correctAns: "Pacific Ocean",
  },
  {
    questions: "Who wrote 'Hamlet'?",
    ans1: "Charles Dickens",
    ans2: "Jane Austen",
    ans3: "William Shakespeare",
    ans4: "Mark Twain",
    correctAns: "William Shakespeare",
  },
  {
    questions: "What is the square root of 64?",
    ans1: "6",
    ans2: "7",
    ans3: "8",
    ans4: "9",
    correctAns: "8",
  },
];
const questions = document.querySelector("#quiz-questions");
questions.innerHTML = array.filter(questions);
