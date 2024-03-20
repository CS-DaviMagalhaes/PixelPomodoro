let startButton = document.querySelector(".btn-start") 
let secondsDiv = document.querySelector(".seconds")
let minutesDiv = document.querySelector(".minutes")
const totalSecondsReset = parseInt(minutesDiv.textContent) * 60

let state = true
let myInterval
startButton.addEventListener("click", function(){

    if(state) {
        state = false
        let totalSeconds = parseInt(minutesDiv.textContent) * 60

        function countdown() {
            if (totalSeconds>0){
                totalSeconds--
                let currentSeconds = totalSeconds % 60

                secondsDiv.textContent = currentSeconds < 10 ? "0" + String(currentSeconds) : String(currentSeconds)
                minutesDiv.textContent = String(Math.floor(totalSeconds / 60))     
            }else{
                clearInterval(myInterval);
                totalSeconds = totalSecondsReset
                minutesDiv.textContent = String(Math.floor(totalSeconds / 60))  
                state = true
            }  
        }
        myInterval = setInterval(countdown, 1000);
    }else{
        alert("Timer has already started")
    }

})