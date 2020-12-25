
let quiz = document.querySelector("#quiz");
let intro = document.querySelector("#introduction");
let assesFT = document.querySelector("#assess-ft");
let progressBar = document.querySelector(".progress");
let startBtn = document.querySelector("#startBtn");
let timeSpan = document.querySelector("#timeSpan");
let questionH5 = document.querySelector("#question");
let answersDiv = document.querySelector("#answers");
let allDone = document.querySelector("#allDone");
let finalScore = document.querySelector("#finalScore");
let audioCorrect = document.querySelector("#audioCorrect");
let audioIncorrect = document.querySelector("#audioIncorrect");
let audioApplause = document.querySelector("#audioApplause");
let audioTollingBell = document.querySelector("#audioTollingBell");
let audioThunder = document.querySelector("#audioThunder");
let submit = document.querySelector("#submit");
let highScoresList = document.querySelector("#highScoresList");
let initials = document.querySelector("#initials");
let clearHighscoresBtn = document.querySelector("#clearHighscoresBtn");
let image_area = document.querySelector("#image_area");



let totalSeconds = 200;
let timeRemining = totalSeconds;
let secondsElapsed = 0;
let discountSeconds = 0;
let currentQuestion = 0;
let progress = 0;
let correctAnswers = 0;
let correctScore = 0;
var localHighscoresArray = [];
let time = setInterval(timer, 1000);
let justRegistered = false;
clearInterval(time);


let quizArray = [
  {
    question:
      "Koje godine je počeo Drugi Srpski ustanak?",
    options: ["1815.", "1804.", "1813.", "1835.", "1811."],
    correct: 0,
    
  },
  {
    question: "Koji je glavni grad Švajcarske?",
    options: [
      "Bern",
      "Lucern",
      "Basel",
      "Cirih",
      "Lugano",
      "Lozana",
    ],
    correct: 0,
    
  },
  {
    question:
      "Od koje do koje godine je vladao knez Mihailo Obrenović",
    options: [
      "Od 1839. do 1842. i od 1860. do 1868.",
      "Od 1849. do 1852. i od 1860. do 1868.",
      "Od 1821. do 1842. i od 1865. do 1868.",
      "Od 1849. do 1862. i od 1870. do 1888.",
      "Od 1819. do 1842. i od 1854. do 1868.",
      "Od 1837. do 1842. i od 1860. do 1868.",
      "Od 1839. do 1842. i od 1862. do 1865.",
    ],
    correct: 0,
    
  },
  {
    question: "Ko je bio trener FC Barselone u vreme kada je Mesi imao svoj debi za prvi tim?",
    options: [
      "Frank Rajkard",
      "Valverde",
      "Pepe Gvardiola",
      "Jup Hajkens",
      "Tito Viljanova",
      
    ],
    correct: 0,
    
  },
  {
    question:
      "Glavnu ulogu u prvom delu filma Kum igra?",
    options: [
      "Marlon Brando",
      "Robert de Niro",
      "Deni de Vito",
      
    ],
    correct: 0,
    
  },
  {
    question: "Koji glumački par igra glavne uloge u filmu Friends with Benefits?",
    options: ["Džastin Timberlejk i Mila Kunis", "Bred Pit i Mila Kunis", "Monika Beluči i Bred Pit", "Nikolas Kejdž i Mila Kunis"],
    correct: 0,
    
  },
  {
    question: "Koje godine je Srbija pobedila na Eurosongu?",
    options: ["2007.", "2008.", "2004.", "2011."],
    correct: 0,
   
  },
  {
    question:
      "Koje godine je izvršen atentat na austrougarskog prestolonaslednika Ferdinanda?",
    options: ["1914.", "1918.", "1921."],
    correct: 0,
    
  },
  {
    question:
      "Koji je glavni grad Malte",
    options: ["La Valeta", "Zejtun", "Kormi", "Zabar", "Sigijevi"],
    correct: 0,
    
  },
  {
    question:
      "Ko je autor knjige Tihi Don?",
    options: ["Mihail Šolohov", "Lav Tolstoj", "Sergej Jesenjin", "Aleksandar Puškin", "Vladimir Majakovski"],
    correct: 0,
    
  },
  
];


startBtn.addEventListener("click", startQuiz);
answersDiv.addEventListener("click", assesSelection);
submit.addEventListener("click", addToHighscores);
clearHighscoresBtn.addEventListener("click", clearHighscores);
$("#staticBackdrop").on("shown.bs.modal", function (e) {
  loadHighScores();
});
$("#staticBackdrop").on("hidden.bs.modal", function (e) {
  if (justRegistered) {
    init();
  }
});

init();


function init() {
  timeSpan.textContent = timeRemining;
  quiz.style.display = "none";
  allDone.style.display = "none";
  assesFT.style.display = "none";
  intro.style.display = "block";
  startBtn.style.display = "block";
  progressBar.style.display = "none";

  totalSeconds = 200;
  timeRemining = totalSeconds;
  secondsElapsed = 0;
  discountSeconds = 0;
  currentQuestion = 0;
  progress = 0;
  correctAnswers = 0;
  correctScore = 0;
  justRegistered = false;
  timeSpan.textContent = timeRemining;

  if (localStorage.getItem("highscore")) {
    localHighscoresArray = localStorage.getItem("highscore").split(",");
  }
  clearInterval(time);
  updateProgress();

  allDone.firstElementChild.setAttribute("class", "alert alert-info mt-0 mb-0");
  submit.setAttribute("class", "btn btn-info");
  progressBar.firstElementChild.setAttribute(
    "class",
    "progress-bar bg-info progress-bar-striped progress-bar-animated"
  );
}

function startQuiz() {
  intro.style.display = "none";
  startBtn.style.display = "none";
  quiz.style.display = "block";
  time = setInterval(timer, 1000);
  progressBar.style.display = "block";
  showQuestion();
}

