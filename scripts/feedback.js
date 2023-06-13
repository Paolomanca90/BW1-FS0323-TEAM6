let stars = document.getElementsByClassName("star");
console.log(stars);
stars = Array.from(stars);
console.log(stars);

// const starClicked = (a, stars) => {
//   console.log("clickeddd, ", stars[a]);
// };
const starClicked = function (a) {
  console.log("clickeddd, ", this.dataset.value);
  stars.forEach((s) => {
    if (s.classList.contains("starsSelecteds")) {
      s.classList.remove("starsSelecteds");
    }
  });
  for (i = 0; i < this.dataset.value; i++)
    if (i < this.dataset.value) {
      stars[i].classList.add("starsSelecteds");
    }
};
stars.forEach((a) => {
  a.addEventListener("click", starClicked);
});
