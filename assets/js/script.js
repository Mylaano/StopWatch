const secondsText = document.querySelector('.stopwatch__clock--seconds');
const millisecondsText = document.querySelector('.stopwatch__clock--milliseconds');

let seconds = 0;
let milliseconds = 0;
let interval;

document.querySelector('.stopwatch__buttons--start').addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

document.querySelector('.stopwatch__buttons--stop').addEventListener('click', () => {
    clearInterval(interval);
});

document.querySelector('.stopwatch__buttons--reset').addEventListener('click', () => {
    clearInterval(interval);

    seconds = 0;
    milliseconds = 0;
    secondsText.textContent = '00';
    millisecondsText.textContent = `00`;
});

function startTimer() {
    milliseconds++;
    millisecondsText.textContent = milliseconds <= 9 ? `0${milliseconds}` : milliseconds;

    if(milliseconds > 99) {
        milliseconds = 0;
        millisecondsText.textContent = `00`;
        
        seconds++;
        secondsText.textContent = seconds <= 9 ? `0${seconds}` : seconds;
    }
};