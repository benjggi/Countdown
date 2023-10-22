// Legen Sie das Ziel-Datum fest (Datum 24.02.2024)
const targetDate = new Date('2024-02-24T00:00:00');

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);

document.addEventListener("DOMContentLoaded", function () {
    const countdownText = document.querySelector(".countdown-text");
    countdownText.classList.add("animate-on-load");
});



