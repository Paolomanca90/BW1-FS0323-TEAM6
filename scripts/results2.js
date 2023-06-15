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

    // funzione per creare i 2 div dei risultati
const result = function () {
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
  
    // appendo i 2 div a cascata per averli nelle giuste posizioni
    myResult.appendChild(right);
    myResult.appendChild(error);
  };
  
  result();
  
  
    // Grafico con Chart.JS
// Includi il plugin chartjs-plugin-piechart-outlabels
Chart.register(ChartDataLabels);

// Opzioni del plugin chartjs-plugin-piechart-outlabels
let dataLabelOptions = {
  render: function(args) {
    // Visualizza il testo all'interno della ciambella in base al numero di risposte corrette
    if (rightAns >= 6) {
      return "Congratulations!";
    } else {
      return "OPS!";
    }
  },
  font: {
    size: 14,
    weight: 'bold'
  },
  color: 'white',
  offset: -20,
  align: 'center',
  anchor: 'center'
};

// Opzioni del grafico
let options = {
  responsive: true,
  cutout: '50%',
  legend: {
    position: 'bottom',
  },
  title: {
    display: true,
    text: 'Risultati'
  },
  animation: {
    animateScale: true,
    animateRotate: true
  },
  plugins: {
    // Abilita il plugin chartjs-plugin-piechart-outlabels
    outlabels: dataLabelOptions
  }
};

// Crea il grafico a ciambella
let ctx = document.getElementById("myChart").getContext("2d");
let myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: options
});

// Dati del grafico
let data = {
    datasets: [{
      data: [rightAns, errorAns],
      backgroundColor: ["blue", "red"]
    }],
    labels: [
      'Corretto',
      'Sbagliato'
    ]
  };
  
  