const quizData = [
  {
    question: "How old is Lionel Messi?",
    a: "53",
    b: "23",
    c: "34",
    d: "15",
    correct: "c",
  },
  {
    question: "Who is the  President of Zimbabwe",
    a: "E.D Mnangagwa",
    b: "Douglas Mwonzora",
    c: "Nelson Chamisa",
    d: "Takudzwa Pamhirwa",
    correct: "a",
  },
  {
    question: "Who is the fastest man on earth",
    a: "Yohan Black",
    b: "Adama Traore",
    c: "Asafa Powell",
    d: "Usain Bolt",
    correct: "d",
  },
  {
    question: "What is the most used programming language",
    a: "Javascripts",
    b: "Javascript",
    c: "Python",
    d: "C++",
    correct: "b",
  },
  {
    question: "What does WHO stand for?",
    a: "World Health Organization",
    b: "Wheat Health Organization",
    c: "Winston Hills Operation",
    d: "Something else",
    correct: "a",
  },
];

const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const answersEls = document.querySelectorAll(".answer");

const submit = document.querySelector("button");

let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswer() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submit.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      //TODO show result
      quiz.innerHTML = `<h3>You answered correctly at ${score}/${quizData.length} questions</h3>
                    <button onclick = "location.reload()">Reload</button>`;
    }
  }
});
