let stars = document.getElementsByClassName("star");
stars = Array.from(stars);
let selectedStar = 0;

//viene chiamata ogni volta che il mouse  passa sopra la stella
const starSelect = function () {
  for (i = 0; i < this.dataset.value; i++)
    if (i < this.dataset.value) {
      stars[i].classList.add("starsSelecteds");
    }
};

//viene chiamata quando il mouse esce dalle stelle per cancellare il colore
const starDeSelected = function () {
  // if (selectedStar === 0) {
  let x = 0;
  let y = 9 - selectedStar;
  for (i = 0; i < y + 1; i++) {
    x = 9 - i;
    //rimuove l'eventuale classe da tutti gli elementi
    if (stars[x].classList.contains("starsSelecteds")) {
      stars[x].classList.remove("starsSelecteds");
      console.log("selectedStar: ", selectedStar, "Deselected x:", x, "i: ", i);
    }
  }
  // }
};

//viene chiamata ogni volta che la stella viene cliccata
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
//aggiunge alle stelle gli eventi click e mouseover e mouseout
stars.forEach((a) => {
  a.addEventListener("click", starClicked);
  a.addEventListener("mouseleave", starDeSelected);
  a.addEventListener("mouseover", starSelect);
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
