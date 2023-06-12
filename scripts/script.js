const sec = document.getElementById("seconds");
sec.innerText = 3;

let rightQuestions = 0;

const timer = () => {
  if (parseInt(sec.innerText) > 0) {
    sec.innerText = parseInt(sec.innerText) - 1;
  } else {
    alert("tempo esaurito");
    clearInterval(myTimer);
  }
};

const myTimer = setInterval(timer, 1000);

const question = () => {
  const questionQ = document.createElement("h2");
  url_string =
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy";
  url = new URL(url_string);
  options = url.searchParams.getAll("[]");

  console.log(options);
};
question();
