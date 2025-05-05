let minutes = document.getElementById("minutes").textContent;
let seconds = document.getElementById("seconds").textContent;
let isTimerOn = false;
let intervalId;
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const divContainerTimer = document.getElementsByClassName("timer__minutes")
console.log(divContainerTimer[0].firstElementChild.textContent)
console.log(divContainerTimer[0].lastElementChild)

const updateTime = () => {
    
    minutes = parseInt(minutes.slice(0, 2));
    seconds = parseInt(seconds.slice(0, seconds.length === 2 ? 2 : 1));

    if(isTimerOn) {
        if((seconds > 0 && seconds <= 9)
        && (minutes > 0 && minutes <= 9)) {
            seconds -= 1
            minutes = "0" + String(minutes) // formatting with leading zero when > 0 and <= 9
            seconds = "0" + String(seconds) // formatting with leading zero when > 0 and <= 9
        } else if((seconds > 0 && seconds <= 9)
        && (minutes >= 10 && minutes <= 25)) {
            seconds -= 1
            seconds = "0" + String(seconds)
        } 
        else if(seconds >= 10 && seconds <= 59) {
            seconds -= 1
        // case when a minute has passed          
        } else if (seconds == 0) {
            minutes -= 1
            seconds = 59
        }
    }
    console.log(`minutes: ${minutes}`)
    console.log(`seconds: ${seconds}`)
    // set up the new text content in the document

    minutes = String(minutes)
    seconds = String(seconds)
    const sep = ":"
    divContainerTimer[0].firstElementChild.textContent = minutes + sep
    divContainerTimer[0].lastElementChild.textContent = seconds
};

startButton.addEventListener("click", () => {

    // check if there's an id already
    if(!intervalId) {
        isTimerOn = !isTimerOn;
        intervalId = setInterval(updateTime, 1000);
    }

    startButton.textContent = "PAUSE";
    startButton.style.background = "#e29f3a";
});