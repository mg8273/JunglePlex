// Set the target date for the countdown (January 26, 2025)
const targetDate = new Date("January 26, 2025 23:59:59").getTime();

// Get the footer where the countdown will display
const countdownFooter = document.getElementById("jungleCountdownFooter2025");

// Function to update the countdown
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
        countdownFooter.textContent = "The offer has expired!";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownFooter.textContent = `Hurry! Offer ends in ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Call immediately on load

// Form Submit Event
document.getElementById("subscriptionForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("jungle-email").value;
    const phone = document.getElementById("jungle-phone").value;

    if (email && phone) {
        alert(`Thank you for subscribing to Jungle!\nEmail: ${email}\nPhone: ${phone}`);
        document.getElementById("subscriptionForm").reset();
    } else {
        alert("Please fill out all fields.");
    }
});
