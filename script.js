/**
 * Live Clock for Top Status Bar
 */
function updateClock() {
    const clockElement = document.getElementById("liveClock");
    if (!clockElement) return;

    const now = new Date();

    const date = now.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric"
    });

    const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    clockElement.textContent = `${date} | ${time}`;
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
    updateClock();
    setInterval(updateClock, 1000);
});