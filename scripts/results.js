// Funzione bottone RATE US in results.html che porta alla pagina feedback.html
function proceedRate() {
  // Reindirizza l'utente alla pagina delle domande
  window.location.href = "feedback.html";
}
//carica dal local storage i valori di risposte giuste e tutte le domande fatte
const rightQuestions = localStorage.getItem("rightQuestions");
const allQuestions = localStorage.getItem("allQuestions");

// variabili per il calcolo delle %
let rightAns = rightQuestions;
let questions = allQuestions;
let errorAns = questions - rightAns;
let rightPerc = (100 * rightAns) / questions;
let opposite = 100 - rightPerc;
let myResult = document.getElementById("result");
let svg = document.querySelector("svg");

// funzione per creare i 3 div dei risultati
const result = function () {
  // div di sx delle risposte corrette
  let right = document.createElement("div");
  let rightP = document.createElement("p");
  let rightS = document.createElement("p");
  rightP.innerText = `${rightAns}/${questions} questions`;
  rightS.innerText = `${rightPerc}%`;
  right.innerText = `Correct`;
  right.appendChild(rightS);
  right.appendChild(rightP);
  right.classList.add("text");

  // div di dx delle risposte errate
  let error = document.createElement("div");
  let errorP = document.createElement("p");
  let errorS = document.createElement("p");
  errorP.innerText = `${errorAns}/${questions} questions`;
  errorS.innerText = `${opposite}%`;
  error.innerText = `Wrong`;
  error.appendChild(errorS);
  error.appendChild(errorP);
  error.classList.add("text");

  // div centrale
  let circularDiv = document.createElement("div");
  circularDiv.classList.add("circular");

  // appendo i 3 div a cascata per averli nelle giuste posizioni
  myResult.appendChild(right);
  myResult.appendChild(circularDiv);
  myResult.appendChild(error);

  // creazione dei gradienti circolari
  if (rightAns >= 6) {
    let div = document.createElement("div");
    div.classList.add("finalR");
    let p = document.createElement("p");
    let s = document.createElement("p");
    let f = document.createElement("p");
    p.innerText = `Congratulations!`;
    s.innerText = `You passed the exam.`;
    f.innerText = `We'll send the certificate in few minutes. Check your email (including promotions / spam folder)`;
    circularDiv.appendChild(svg);
    div.appendChild(p);
    div.appendChild(s);
    div.appendChild(f);
    circularDiv.appendChild(div);
  } else {
    let div = document.createElement("div");
    div.classList.add("finalE");
    let p = document.createElement("p");
    let s = document.createElement("p");
    let f = document.createElement("p");
    p.innerText = `OPS!`;
    s.innerText = `Unluckly you not passed the exam.`;
    f.innerText = `I'm sure you are not taking the Epicode course with Stefano`;
    circularDiv.appendChild(svg);
    div.appendChild(p);
    div.appendChild(s);
    div.appendChild(f);
    circularDiv.appendChild(div);
  }
  return circularDiv;
};

result();

let progressC = document.querySelector(".progress");
let radius = progressC.r.baseVal.value;
let circum = radius * 2 * Math.PI;
progressC.style.strokeDasharray = circum;

const setProgress = function (percent) {
  console.log(percent);
  progressC.style.strokeDasharray = `${
    circum - (percent / 100) * circum
  } ${circum}`;

  console.log(progressC.style.strokeDasharray);
};

setProgress(rightPerc);
