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
// Preloader Counter Animation (01 to 10 Modules)
function runPreloader() {
    const counter = document.getElementById("preloaderCount");
    const preloader = document.getElementById("preloader");
    if (!counter || !preloader) return;

    let count = 1;
    const maxCount = 10;
    const speed = 120; // Milliseconds per count

    const timer = setInterval(() => {
        // Aesthetic leading zero: 01, 02, 03 ... 10
        counter.textContent = count < 10 ? `0${count}` : count;

        if (count >= maxCount) {
            clearInterval(timer);

            // 10 count hone ke baad smooth slide up
            setTimeout(() => {
                preloader.classList.add("hide");
            }, 300);
        } else {
            count++;
        }
    }, speed);
}

// Start on page load
window.addEventListener("load", runPreloader);