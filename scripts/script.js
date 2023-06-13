// Inizio Scripts Pagina Welcome

// Funzione bottone proceed in welcome.html che porta alla pagina benchmark.html
function proceed() {
  //seleziona gli elementi della pagina HTML che corrispondono alla casella di controllo e al messaggio di errore
  const checkbox = document.querySelector("#checkbox");
  const errorMessage = document.querySelector("#error-message");

  // Verifica se la casella di controllo è selezionata
  if (checkbox.checked) {
    // Se lo è, reindirizza l'utente alla pagina "benchmark.html"
    window.location.href = "benchmark.html";
  } else {
    // Se non lo è, mostra il messaggio di errore
    errorMessage.textContent =
      "Per favore, spunta la casella prima di procedere.";
  }
}
// Fine Scripts Pagina Welcome

// Inizio Script  Pagina Feedback

// Funzione bottone feedback.html che porta al sito epicode.
function infoButton() {
  // Reindirizza l'utente alla pagina delle domande
  window.location.href = "https://epicode.com/en/";
}

// Fine Script  Pagina Feedback
