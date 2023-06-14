let questions = [];
let maxSeconds = 30;
let nowSeconds = maxSeconds;
let maxQuestion = questions.length;
const timerCont = document.getElementsByClassName("timer")[0];
const sec = document.getElementById("seconds");
sec.innerText = maxSeconds;

let clickedAns = "";
let questDid = [];
let rightQuestions = 0;
let answered = "";

//crea il timer e ne gestisce i colori
const timer = () => {
  if (nowSeconds > 0) {
    nowSeconds = nowSeconds - 1;
    sec.innerText = nowSeconds;
    secPer = 100 - (nowSeconds / maxSeconds) * 100;
    timerCont.style = `background: linear-gradient(#642669, #642669) content-box no-repeat, conic-gradient( #9a6a9e ${secPer}%, 0, #00e9e9) border-box`;
  } else {
    quest();
    nowSeconds = maxSeconds;
    sec.innerText = nowSeconds;
    timerCont.style = `background: linear-gradient(#642669, #642669) content-box no-repeat, conic-gradient( #9a6a9e 0%, 0, #00e9e9) border-box`;
  }
};

// da riattivare, bloccata mette noie
let myTimer = setInterval(timer, 1000);
clearInterval(myTimer);

// mischia l'array risposte per averle sempre in ordine diverso
const shuffle = (array) => {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

// funzione del bottone next
const nextButton = document.getElementById("nextButton");
const buttonNext = () => {
  if (answered !== "") {
    nowSeconds = maxSeconds;
    //dopo il click mostra il risultato della risposta
    const selectedAns = document.getElementsByClassName("selected")[0];
    console.log(selectedAns);
    if (answered) {
      rightQuestions = rightQuestions + 1;
      selectedAns.classList.add("righAnswer");
    } else {
      selectedAns.classList.add("wrongAnswer");
    }
    //nasconde il bottone next per evitare multiple risposte
    nextButton.classList.add("none");
    if (questDid.length < questions.length) {
      //e dopo x secondi chiama la prossima domanda o termina il test
      setTimeout(function () {
        quest();
      }, 1500);
    } else if (questDid.length === maxQuestion) {
      setTimeout(function () {
        endTest();
      }, 1500);
    }

    answered = "";
    clearInterval(myTimer);
  }
};

nextButton.addEventListener("click", buttonNext);

// al click su avanti verifica se la risposta è vera o falsa
const answersButton = function (a, c) {
  if (a === c) {
    answered = true;
  } else {
    answered = false;
  }
};

// aggiorna la scritta nel footer
const benchmarkFooter = document.getElementsByClassName("benchmark-footer")[0];
const updateFooter = () => {
  const thisQ = document
    .getElementsByClassName("benchmark-footer")[0]
    .getElementsByTagName("h3")[1];
  thisQ.innerText = questDid.length;
  const totalQ = document
    .getElementsByClassName("benchmark-footer")[0]
    .getElementsByTagName("h3")[2];
  totalQ.innerText = " / " + questions.length;
};

//colora la risposta selezionata
const changeClassColor = function (a) {
  clickedAns.forEach((x) => {
    if (x.classList.contains("selected")) x.classList.remove("selected");
  });
  this.classList.add("selected");
};

//cerca le risposte per metterci l'eventListner
const searchAnswers = () => {
  clickedAns = document
    .getElementById("answer-options")
    .getElementsByTagName("p");

  clickedAns = Array.from(clickedAns);

  clickedAns.forEach((c) => {
    c.addEventListener("click", changeClassColor);
  });
};

// crea le domande e le risposte in base all'array
const quest = () => {
  //controlla se il bottone next non è visibile e lo rende visibile
  if (nextButton.classList.contains("none"))
    nextButton.classList.remove("none");

  if (questDid.length < questions.length) {
    let rnd = Math.floor(Math.random() * questions.length);
    if (!questDid.includes(rnd)) {
      nowSeconds = maxSeconds;
      sec.innerText = nowSeconds;
      questDid.push(rnd);
      updateFooter();
      const myanswerPlace = document.getElementById("answer-options");
      const myQuestPlace = document.getElementById("question-text");
      myanswerPlace.replaceChildren();
      myQuestPlace.replaceChildren();
      const questMain = document.createElement("h3");
      questMain.innerText = questions[rnd].question;
      myQuestPlace.appendChild(questMain);
      let answersList = [];
      answersList.push(questions[rnd].correct_answer);
      answersList.push(...questions[rnd].incorrect_answers);
      shuffle(answersList);
      answersList.forEach((a) => {
        const answers = document.createElement("p");
        answers.innerText = a;
        myanswerPlace.appendChild(answers);

        answers.addEventListener("click", () => {
          answersButton(answers.innerText, questions[rnd].correct_answer);
        });
        searchAnswers();
      });
      myTimer = setInterval(timer, 1000);
      timerCont.style = `background: linear-gradient(#642669, #642669) content-box no-repeat, conic-gradient( #9a6a9e 0%, 0, #00e9e9) border-box`;
    } else quest();
  } else {
    endTest();
  }
};

//avvia il test dopo la scelta della difficoltà
const difficultForm = document.getElementById("difficultsForm");
const startTest = async function (b) {
  b.preventDefault();
  //prende la difficoltà scelta dai radio button
  const diffChosen = document.querySelector(
    'input[name="difficults"]:checked'
  ).value;

  //legge dall'url il json, aspetta e lo invia alla'array questions
  let response = await fetch(
    `https://opentdb.com/api.php?amount=10&category=18&difficulty=${diffChosen}`
  );
  let readedQuestions = await response.json();
  questions = readedQuestions["results"];
  maxQuestion = questions.length;
  quest();
  const divToHide = document.getElementById("difficultsDiv");
  divToHide.classList.add("none");
  timerCont.classList.remove("none");
  nextButton.classList.remove("none");
  benchmarkFooter.classList.remove("none");
};

//nasconde items all'avvio
timerCont.classList.add("none");
nextButton.classList.add("none");
benchmarkFooter.classList.add("none");

difficultForm.addEventListener("submit", startTest);

//viene chiamata quando il test è finito
const endTest = () => {
  clearInterval(myTimer);
  localStorage.setItem("rightQuestions", rightQuestions);
  localStorage.setItem("allQuestions", questDid.length);
  window.location.href = "results.html";
};
