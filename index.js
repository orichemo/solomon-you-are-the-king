let buttons = document.querySelectorAll(".rating-state__button-item");
let submitIndex = 0;

buttons.forEach(function (button, index) {
  function getSelected(e) {
    if (submitIndex !== 0) {
      buttons[submitIndex - 1].style.backgroundColor = "hsl(213, 19%, 18%)";
    }
    submitIndex = index + 1; /*save the index of the choosen button */
    console.log(submitIndex); /*print the index */
    button.style.backgroundColor = "hsl(217, 12%, 63%)";
  }

  button.addEventListener("click", getSelected);
});

let submitButton = document.querySelector(".rating-state__button");
let startMode = document.querySelector(".rating-state");
startMode.classList.remove("rating-state")
let endMode = document.querySelector(".thank-you_display");
let spanRate = document.querySelector(".thank-you__rate-number");
let emptyRank = document.querySelector(".thank-you__rate");

function getSubmitComment(event) {
  event.preventDefault();
  if (submitIndex === 0) {
    emptyRank.style.color = "hsl(213, 19%, 18%)";
  } else {
   spanRate.textContent = " " + submitIndex;
}
   startMode.classList.add("rating-state");
   endMode.classList.remove("thank-you_display");
   console.log("submit");
}

submitButton.addEventListener("click", getSubmitComment);

