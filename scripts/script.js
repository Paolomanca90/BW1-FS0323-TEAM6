//array quest
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

const sec = document.getElementById("seconds");
sec.innerText = 3;

let rightQuestions = 0;

const timer = () => {
  if (parseInt(sec.innerText) > 0) {
    sec.innerText = parseInt(sec.innerText) - 1;
  } else {
    alert("tempo esaurito");
    clearInterval(myTimer);
  }
};

// da riattivare, bloccata mette noie
// const myTimer = setInterval(timer, 1000);

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const answersButton = function (a, c) {
  console.log("a.innerText", a);
  if (a === c) {
    rightQuestions++;
  }
  console.log("rightQuestions", rightQuestions);
};

const answersButton2 = function (a) {
  console.log("a.innerText2", a.innerText);
};

const quest = () => {
  let rnd = Math.floor(Math.random() * questions.length);
  let questDid = [];
  if (!questDid.includes(rnd)) {
    questDid.includes(rnd);

    const myQuestPlace = document.getElementById("my-question");
    const questMain = document.createElement("h2");
    questMain.innerText = questions[rnd].question;
    myQuestPlace.appendChild(questMain);
    let answers = [];
    answers.push(questions[rnd].correct_answer);
    answers.push(...questions[rnd].incorrect_answers);
    shuffle(answers);
    answers.forEach((a) => {
      const answers = document.createElement("p");
      answers.innerText = a;
      myQuestPlace.appendChild(answers);
      answers.addEventListener("click", answersButton2);
      answers.addEventListener("click", () => {
        answersButton(answers.innerText, questions[rnd].correct_answer);
      }); //answers.innerText, questions[rnd].correct_answer
    });
  }
};
quest();

// dovrebbe caricare array da url ma non funziona
// const question = () => {
//   const questionQ = document.createElement("h2");
//   url_string =
//     "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy";
//   url = new URL(url_string);
//   options = url.searchParams.getAll("[]");

//   console.log(options);
// };
// question();


// Inizio Scripts Pagina Welcome

// Funzione bottone proceed in welcome.html che porta alla pagina benchmark.html
function proceed() {
  // seleziona gli elementi della pagina HTML che corrispondono alla casella di controllo
  const checkbox = document.querySelector("#checkbox");

  // Verifica se la casella di controllo è selezionata
  if (checkbox.checked) {
    // Se lo è, reindirizza l'utente alla pagina "benchmark.html"
    window.location.href = "benchmark.html";
  } else {
    // Se non lo è, visualizza un messaggio di avviso
    alert("Per favore, spunta la casella prima di procedere.");
  }
}

// questa parte del codice seleziona gli elementi della pagina HTML che corrispondono alla casella di controllo e al pulsante “PROCEED” 
// In questo modo, possiamo utilizzare queste variabili per accedere e manipolare gli elementi della pagina. 
const checkbox = document.querySelector("#checkbox");
const proceedButton = document.querySelector("#button");

// Disabilita il pulsante per impostazione predefinita
proceedButton.disabled = true;

// Aggiungi un listener di eventi alla casella di controllo
checkbox.addEventListener("change", function () {
  // Abilita o disabilita il bottone Proceed in base se la checkbox è spuntata o meno.
  proceedButton.disabled = !this.checked;
});

// Fine Scripts Pagina Welcome