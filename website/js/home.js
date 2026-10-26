function updateClock() {
    const now = new Date();
    document.getElementById("curr-time").textContent = now.toLocaleTimeString("en-GB");
    document.getElementById("curr-date").textContent = now.toLocaleDateString("en-GB");
}

updateClock();
setInterval(updateClock, 1000);
