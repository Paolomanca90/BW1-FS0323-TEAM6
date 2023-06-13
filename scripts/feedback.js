let stars = document.getElementsByClassName("star");
stars = Array.from(stars);
let selectedStar;

//viene chiamata ogni volta che la stella viene cliccata o il mouse ci passa sopra
const starClicked = function (a) {
  stars.forEach((s) => {
    //rimuove l'eventuale classe da tutti gli elementi
    if (s.classList.contains("starsSelecteds")) {
      s.classList.remove("starsSelecteds");
    }
  });
  //per tutte le stelle con valore minore della stella viene applicata la classe
  for (i = 0; i < this.dataset.value; i++)
    if (i < this.dataset.value) {
      stars[i].classList.add("starsSelecteds");
    }
  selectedStar = this.dataset.value;
};
//aggiunge alle stelle gli eventi click e mouseover
stars.forEach((a) => {
  a.addEventListener("click", starClicked);
  a.addEventListener("mouseover", starClicked);
});

//gestione del form

const feedbackFunc = (f) => {
  f.preventDefault();
  let feedbackText = document.getElementById("feedback").value;
  alert(
    "Grazie per il tuo feedback: " +
      feedbackText +
      " e del voto: " +
      selectedStar
  );
};

const feedbackForm = document.getElementById("feedbackForm");
feedbackForm.addEventListener("submit", feedbackFunc);
