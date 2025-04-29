const questions = [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Paris", correct: true },
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Rome", correct: false }
      ]
    },
    {
      question: "Which language runs in a web browser?",
      answers: [
        { text: "Python", correct: false },
        { text: "JavaScript", correct: true },
        { text: "C++", correct: false },
        { text: "Java", correct: false }
      ]
    },
    {
      question: "What does CSS stand for?",
      answers: [
        { text: "Central Style Sheets", correct: false },
        { text: "Cascading Style Sheets", correct: true },
        { text: "Coded Style Syntax", correct: false },
        { text: "Custom Style Syntax", correct: false }
      ]
    }
];
  
const questionEl = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
  
let currentQuestionIndex = 0;
let score = 0;
  
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerText = "Next";
    showQuestion();
}
  
function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) button.dataset.correct = true;
      button.addEventListener("click", selectAnswer);
      answerButtons.appendChild(button);
    });
}
  
function resetState() {
    nextBtn.style.display = "none";
    answerButtons.innerHTML = "";
}
  
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.style.backgroundColor = "green";
      score++;
    } else {
      selectedBtn.style.backgroundColor = "red";
    }
  
    Array.from(answerButtons.children).forEach(btn => {
      btn.disabled = true;
      if (btn.dataset.correct === "true") {
        btn.style.backgroundColor = "green";
      }
    });
  
    nextBtn.style.display = "block";
}
  
function showScore() {
    resetState();
    questionEl.innerText = `You scored ${score} out of ${questions.length}! 🎉`;
    nextBtn.innerText = "Play Again";
    nextBtn.style.display = "block";
}
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
}
  
nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
});

startQuiz();  