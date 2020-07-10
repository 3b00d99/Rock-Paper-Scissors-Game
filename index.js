const RockElement = document.getElementById("rock");
const PaperElement = document.getElementById("paper");
const ScissorsElement = document.getElementById("scissors");
const MyResult = document.getElementById("myResult");
const computerResult = document.getElementById("computerResult");
const playAgain = document.getElementById("playAgain");
const result = document.getElementById("result");
const popUpContainer = document.getElementById("popUp");

const array = [
  "Rock",
  "Paper",
  "Scissors",
  "Rock",
  "Paper",
  "Scissors",
  "Rock",
  "Paper",
  "Scissors",
];

RockElement.addEventListener("click", (e) => {
  MyResult.innerText = e.target.value;
  computerResult.innerText = array[Math.floor(Math.random() * 9)];
  MessageAlert();
});

PaperElement.addEventListener("click", (e) => {
  MyResult.innerText = e.target.value;
  computerResult.innerText = array[Math.floor(Math.random() * 9)];
  MessageAlert();
});

ScissorsElement.addEventListener("click", (e) => {
  MyResult.innerText = e.target.value;
  computerResult.innerText = array[Math.floor(Math.random() * 9)];
  MessageAlert();
});

playAgain.addEventListener("click", (e) => {
  popUpContainer.className = "hidePopUp";
});

const MessageAlert = () => {
  if (MyResult.innerText === computerResult.innerText) {
    result.innerText = "You drawer";
    popUpContainer.className = "drawer";
  } else if (
    MyResult.innerText === "Rock" &&
    computerResult.innerText === "Paper"
  ) {
    result.innerText = "You lose, sucker!";
    popUpContainer.className = "loser";
  } else if (
    computerResult.innerText === "Rock" &&
    MyResult.innerText === "Paper"
  ) {
    result.innerText = "You winner";
    popUpContainer.className = "winner";
  } else if (
    MyResult.innerText === "Rock" &&
    computerResult.innerText === "Scissors"
  ) {
    result.innerText = "You winner";
    popUpContainer.className = "winner";
  } else if (
    computerResult.innerText === "Rock" &&
    MyResult.innerText === "Scissors"
  ) {
    result.innerText = "You lose, sucker!";
    popUpContainer.className = "loser";
  } else if (
    MyResult.innerText === "Paper" &&
    computerResult.innerText === "Scissors"
  ) {
    result.innerText = "You lose, sucker!";
    popUpContainer.className = "loser";
  } else if (
    computerResult.innerText === "Paper" &&
    MyResult.innerText === "Scissors"
  ) {
    result.innerText = "You winner";
    popUpContainer.className = "winner";
  }
};
