let stars = document.getElementsByClassName("star");
console.log(stars);
stars = Array.from(stars);
console.log(stars);

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
};
//aggiunge alle stelle gli eventi click e mouseover
stars.forEach((a) => {
  a.addEventListener("click", starClicked);
  a.addEventListener("mouseover", starClicked);
});
