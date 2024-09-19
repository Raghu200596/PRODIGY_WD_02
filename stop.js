let startTime, updatedTime, difference, tInterval;
let running = false;
let lapCounter = 1;

function start() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(updateTime, 1000);
        running = true;
    }
}
function stop() {
    clearInterval(tInterval);
    running = false;
}

function reset() {
    clearInterval(tInterval);
    running = false;
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("laps").innerHTML = "";
    lapCounter = 1;
    difference = 0;
}

function lap() {
    if (running) {
        const lapTime = document.getElementById("display").textContent;
        const lapList = document.getElementById("laps");
        const newLap = document.createElement("li");
        newLap.textContent = "Lap " + lapCounter + ": " + lapTime;
        lapList.appendChild(newLap);
        lapCounter++;
    }
}
function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    document.getElementById("display").textContent =
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
}