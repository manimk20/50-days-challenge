function updateClock() {
    const now = new Date();

    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const formattedDate = now.toLocaleDateString(undefined, options);
    document.getElementById('date').textContent = formattedDate;
}

setInterval(updateClock, 1000);
updateClock();