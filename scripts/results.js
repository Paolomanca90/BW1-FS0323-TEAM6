// Funzione bottone RATE US in results.html che porta alla pagina feedback.html
function proceedRate() {
    // Reindirizza l'utente alla pagina delle domande
    window.location.href = "feedback.html";
  }

  // variabili per il calcolo delle % 
let rightAns = 4
let questions = 10
let errorAns = questions - rightAns
let rightPerc = 100*rightAns/questions
let opposite = 100 - rightPerc
let myResult = document.getElementById('result')

// funzione per creare i 3 div dei risultati
const result = function(){

  // div di sx delle risposte corrette
  let right = document.createElement('div')
  let rightP = document.createElement('p')
  let rightS = document.createElement('p')
  rightP.innerText = `${rightAns}/${questions} questions`
  rightS.innerText = `${rightPerc}%`
  right.innerText = `Correct`
  right.appendChild(rightS)
  right.appendChild(rightP)
  right.classList.add('text')

  // div di dx delle risposte errate
  let error = document.createElement('div')
  let errorP = document.createElement('p')
  let errorS = document.createElement('p')
  errorP.innerText = `${errorAns}/${questions} questions`
  errorS.innerText = `${opposite}%`
  error.innerText = `Wrong`
  error.appendChild(errorS)
  error.appendChild(errorP)
  error.classList.add('text')

  // div centrale
  let circularDiv = document.createElement('div')
  circularDiv.classList.add('circular')

  // appendo i 3 div a cascata per averli nelle giuste posizioni
  myResult.appendChild(right)
  myResult.appendChild(circularDiv)
  myResult.appendChild(error)

  // creazione dei gradienti circolari
  if(rightAns >= 6){
    let p = document.createElement('p')
    p.innerText = 'Congratulations!'
    let s = document.createElement('p')
    s.innerText = 'You passed the exam.'
    let f = document.createElement('p')
    f.innerText = `We'll send the certificate in few minutes. \nCheck your email (including promotions / spam folder)`
    circularDiv.style = `background: linear-gradient(#642669, #642669) content-box no-repeat, conic-gradient(#D20094 ${opposite}%, 0, #00FFFF) border-box`;
    circularDiv.appendChild(p)
    circularDiv.appendChild(s)
    circularDiv.appendChild(f)
  }else{
    let p = document.createElement('p')
    p.innerText = 'OPS!'
    let s = document.createElement('p')
    s.innerText = 'Unluckly you not passed the exam.'
    circularDiv.style = `background: linear-gradient(#642669, #642669) content-box no-repeat, conic-gradient(#D20094 ${opposite}%, 0, #00FFFF) border-box`;
    circularDiv.appendChild(p)
    circularDiv.appendChild(s)
  }
  return circularDiv
}

result()