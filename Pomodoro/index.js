//ANCHOR - Umrao jAAN
const start = document.querySelector("#start");
const stops = document.querySelector("#stop");
const reset = document.querySelector("#reset");

const timer = document.querySelector("#timer");

let minutes = 25;
let seconds = 0;
let timerId;

start.addEventListener("click", () => {
  console.log("start");

  timerId = setInterval(() => {
    console.log("start1");
    if (seconds == 0) {
      seconds = 59;
      if (minutes !== 0) {
        minutes--;
      }
    } else {
      seconds--;
    }
    timer.innerHTML = `${minutes}:${seconds}`;
  }, 1000);
});

stops.addEventListener("click", () => {
  clearInterval(timerId);
});

reset.addEventListener("click", () => {
  minutes = 25;
  seconds = "00";
  timer.innerHTML = `${minutes}:${seconds}`;
});
