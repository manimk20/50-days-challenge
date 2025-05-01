let count = 0;

function updateCounter(value) {
    count += value;
    document.getElementById('counter').textContent = count;
}

function resetCounter() {
    count = 0;
    document.getElementById('counter').textContent = count;
}