// Funzione bottone RATE US in results.html che porta alla pagina feedback.html
function proceedRate() {
    // Reindirizza l'utente alla pagina delle domande
    window.location.href = "feedback.html";
  }

  // variabili per il calcolo delle % 
let rightAns = 6
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
  rightP.innerText = `${rightAns}/${questions} questions`
  right.innerText = `Correct ${rightPerc}%`
  right.appendChild(rightP)
  right.classList.add('text')

  // div di dx delle risposte errate
  let error = document.createElement('div')
  let errorP = document.createElement('p')
  errorP.innerText = `${errorAns}/${questions} questions`
  error.innerText = `Wrong ${opposite}%`
  error.appendChild(errorP)
  error.classList.add('text')

  // div centrale
  let text = document.createElement('p')
  let circularDiv = document.createElement('div')
  circularDiv.classList.add('circular')
  circularDiv.appendChild(text)

  // appendo i 3 div a cascata per averli nelle giuste posizioni
  myResult.appendChild(right)
  myResult.appendChild(circularDiv)
  myResult.appendChild(error)

  // creazione dei gradienti circolari
  if(rightAns >= 6){
    circularDiv.style = `background: linear-gradient(#642669, #642669) content-box no-repeat, conic-gradient(#D20094 ${opposite}%, 0, #00FFFF) border-box`;
    let p = document.createElement('p')
    p.innerText = 'Congratulations!'
    text.innerText = `Congratulations! \nYou passed the exam. \nWe'll send the certificate in few minutes. Check your email (including promotions / spam folder)`
  }else{
    circularDiv.style = `background: linear-gradient(#642669, #642669) content-box no-repeat, conic-gradient(#D20094 ${opposite}%, 0, #00FFFF) border-box`;
    text.innerText = "Purtroppo non hai superato l'esame"
  }
  return circularDiv
}

result()