" use strict";
const button = document.getElementsByTagName("button")[0];
const hoursHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondsHand = document.querySelector(".seconds-hand");
const h2 = document.querySelector("#time h2");
const span = document.getElementsByTagName("span")[0];

setInterval(() => {
  setDate();
}, 1000);

const setDate = () => {
  const now = new Date();
  let hours = now.getHours();
  let min = now.getMinutes();
  let seconds = now.getSeconds();
  const hoursDegree = (hours / 12) * 360 + 90;
  const minDegree = (min / 60) * 360 + 90;
  const secondsDegree = (seconds / 60) * 360 + 90;
  var ampm = hours >= 12 ? "PM" : "AM";
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
  minHand.style.transform = `rotate(${minDegree}deg)`;

  if (button.innerText == "24 Format") {
    h2.innerText = `${hours}:${min}:${seconds}`;
    span.innerText = "";
  }
  if (button.innerText == "12 Format") {
    if (hours < 12) {
      h2.innerText = h2.innerText = `${hours}:${min}:${seconds}`;
    } else {
      h2.innerText = `${hours - 12}:${min}:${seconds}`;
    }
    span.innerText = ampm;
  }
};

const btn = () => {
  button.addEventListener("click", () => {
    if (button.innerText == "24 Format") {
      button.innerText = "12 Format";
    } else {
      button.innerText = "24 Format";
    }
  });
};
btn();
