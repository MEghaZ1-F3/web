function updateDateTime() {
    const now = new Date();
    
    // Format: Mon Aug 17 2026
    const dateOptions = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', dateOptions);
    
    // Format: 11:31:05 AM
    const timeString = now.toLocaleTimeString('en-US', { hour12: true });
    
    const datetimeElement = document.getElementById("datetime");
    if (datetimeElement) {
        datetimeElement.innerHTML = `📅 ${dateString} &nbsp;|&nbsp; 🕒 ${timeString}`;
    }
}

// Update clock every second
setInterval(updateDateTime, 1000);
updateDateTime();