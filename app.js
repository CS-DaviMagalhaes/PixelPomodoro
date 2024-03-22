let startButton = document.querySelector(".btn-start");
let secondsDiv = document.querySelector(".seconds");
let minutesDiv = document.querySelector(".minutes");
let appMessage = document.querySelector(".app-message")
const totalSecondsReset = parseInt(minutesDiv.textContent) * 60;

let state = true;
let myInterval;

startButton.addEventListener("click", function() {
    startButton.textContent = "RESET"
    appMessage.style.opacity = 0;
    if (state) {
        state = false;
        let totalSeconds = parseInt(minutesDiv.textContent) * 60;
        updateDisplay(totalSeconds); //update timer immediately to 24:59 so it feels more responsive
        function countdown() {
            if (totalSeconds > 0) { //time running
                totalSeconds--;
                updateDisplay(totalSeconds);
            } else { // time completed
                new Audio("/imgs/bell.wav").play();
                resetTimer();
            }
        }
        countdown();
        myInterval = setInterval(countdown, 1000);
    } else {
        resetTimer();
    }
});

function resetTimer() {
    startButton.textContent = "START";
    clearInterval(myInterval);
    totalSeconds = totalSecondsReset;
    updateDisplay(totalSeconds);
    state = true;
    appMessage.style.opacity = 1;
}

function updateDisplay(totalSeconds) {
    let currentSeconds = totalSeconds % 60;
    secondsDiv.textContent = currentSeconds < 10 ? "0" + String(currentSeconds) : String(currentSeconds);
    minutesDiv.textContent = String(Math.floor(totalSeconds / 60));
}
