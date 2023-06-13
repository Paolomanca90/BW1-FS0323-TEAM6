// Funzione bottone RATE US in results.html che porta alla pagina feedback.html
function proceedRate() {
    // Reindirizza l'utente alla pagina delle domande
    window.location.href = "feedback.html";
  }

let rightAns = 4
let questions = 10
let myResult = document.getElementById('result')

const result = function(){
  let text = document.createElement('p')
  let circularDiv = document.createElement('div')
  circularDiv.appendChild(text)
  myResult.appendChild(circularDiv)
  if(rightAns >= 6){
    circularDiv.style = `background: linear-gradient(#642669, #642669) content-box no-repeat, conic-gradient( #9a6a9e ${rightAns}%, 0, #00e9e9) border-box`;
    text.innerText = "Complimenti hai superato l'esame"
  }else{
    circularDiv.style = `background: linear-gradient(#642669, #642669) content-box no-repeat, conic-gradient( #9a6a9e 0%, 0, #00e9e9) border-box`;
    text.innerText = "Purtroppo non hai superato l'esame"
  }
  return circularDiv
}

result()