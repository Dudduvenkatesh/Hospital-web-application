function randomUsage() {
    return Math.floor(Math.random() * 100);
}

function updateBar(idBar, idText) {
    const value = randomUsage();
    document.getElementById(idBar).style.width = value + "%";
    document.getElementById(idText).textContent = value + "%";
}

function refreshData() {
    updateBar("cpu-bar", "cpu-text");
    updateBar("memory-bar", "memory-text");
    updateBar("disk-bar", "disk-text");
}

// Auto refresh every 5 seconds
setInterval(refreshData, 5000);

// Initial load
refreshData();

