//todo: block start button when timer has started or make stop button
//todo: add reset button
//todo: user input for custom time (max 1hr)

let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")

let startButton = document.querySelector(".btn-start") //searching for class
    
startButton.addEventListener("click", function(){

    let minutesInt = parseInt(minutes.textContent) //convert str to int
    let secondsInt = parseInt(seconds.textContent)

    function countdown() {
        if (minutesInt > 0 || secondsInt > 0 ){
            if (secondsInt % 60 === 0){
                secondsInt = 59
                minutesInt -= 1
            }else{
                secondsInt -= 1
            }
            seconds.textContent = String(secondsInt)
            minutes.textContent = String(minutesInt)
        }
        setTimeout(countdown,1000)
    }
    countdown()
})