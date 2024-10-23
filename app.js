const quizData = [
  {
    question: "who is mr klins favorite person ever?",
    image: "images/mosh.jpg",
    answers: ["matt pookie", "mosh", "bill gates", "his laptop"],
    correct: 1,
  },
  {
    question: "what is my favorite animal crossing villager",
    image: "images/marshal.jpg",
    answers: ["punchy", "bob", "kidd cat", "marshal"],
    correct: 3,
  },
  {
    question: "finish the name of the game.. escape ____",
    image: "images/pookieobby.png",
    answers: ["matt pookie obby", "the nerd", "brooks", "ben obby"],
    correct: 0,
  },
  {
    question: "who is this",
    image: "images/familyguyfan.png",
    answers: ["FamilyGuyFan1725", "XxQualityxX", "H3lpfulSn4k3", "GooseGarey"],
    correct: 0,
  },
  {
    question: "what is matts favorite thing to do",
    image: "images/happy matt.jpg",
    answers: [
      "play jailbreak",
      "wear his headphones",
      "send brooks 99999 tiktoks a day",
      "all of the above",
    ],
    correct: 2,
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const questionImage = document.getElementById("question-image");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const scoreDisplay = document.getElementById("score-display");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.style.display = "none";
  scoreDisplay.textContent = "";
  showQuestion(quizData[currentQuestionIndex]);
}

function showQuestion(question) {
  questionText.textContent = question.question;
  questionImage.src = question.image;
  answerButtons.innerHTML = "";
  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("btn");
    button.addEventListener("click", () =>
      selectAnswer(index, question.correct)
    );
    answerButtons.appendChild(button);
  });
}

function selectAnswer(selectedIndex, correctIndex) {
  const buttons = answerButtons.children;
  Array.from(buttons).forEach((button) => {
    button.disabled = true;
  });

  if (selectedIndex === correctIndex) {
    buttons[selectedIndex].classList.add("correct");
    score++;
  } else {
    buttons[selectedIndex].classList.add("incorrect");
    buttons[correctIndex].classList.add("correct-answer");
  }

  nextButton.style.display = "block";
  scoreDisplay.textContent = `Score: ${score}`;
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion(quizData[currentQuestionIndex]);
    nextButton.style.display = "none";
  } else {
    endQuiz();
  }
});

function endQuiz() {
  questionContainer.innerHTML = `youre score is ${score} out of ${quizData.length}.</p>`;
  nextButton.style.display = "none";
}

startQuiz();
