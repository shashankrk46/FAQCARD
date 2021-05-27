const arr = document.querySelectorAll(".arrow");

const arrLoop = arr.forEach(e => {
  e.addEventListener("click", showAnswer);
});

function showAnswer(e) {
  const mainBox = e.target.parentElement.parentElement;
  const para = mainBox.querySelector(".answer");
  if (para.style.display === "block") {
    return (para.style.display = "none");
  } else {
    return (para.style.display = "block");
  }
}
