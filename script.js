let days = prompt("შეიყვანეთ დღეები:");
let hours = prompt("შეიყვანეთ საათები:");
let minutes = prompt("შეიყვანეთ წუთები:");
let seconds = prompt("შეიყვანეთ წამები:");

let totalSeconds = (days * 86400) + (hours * 3600) + (minutes * 60) + (seconds);

function startCountdown() {
    if (totalSeconds >= 0) {
        let displayDays = Math.floor(totalSeconds / 86400);
        let displayHours = Math.floor((totalSeconds % 86400) / 3600);
        let displayMinutes = Math.floor((totalSeconds % 3600) / 60);
        let displaySeconds = totalSeconds % 60;

        document.getElementById('days').textContent = displayDays.toString().padStart(2, '0');
        document.getElementById('hours').textContent = displayHours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = displayMinutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = displaySeconds.toString().padStart(2, '0');

        totalSeconds--;
    } else {
        clearInterval(countdown);
        alert("უკუთვლა დასრულებულია!")
    }
}

let countdown = setInterval(startCountdown, 1000);