const year = new Date().getFullYear();

if (year === 2030) {
    document.getElementById('year-check').innerText = "Yes, it's the year 2030!";
} else {
    document.getElementById('year-check').innerText = "No, it's not the year 2030.";
}

// Auto day-night mode
const hour = new Date().getHours();
const body = document.body;

if (hour >= 18 || hour < 6) {
    // Night mode
    body.classList.add('night-mode');
} else {
    // Day mode
    body.classList.remove('night-mode');
}