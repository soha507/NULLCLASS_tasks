// scripts.js

// This function ensures the iframe containing Power BI reports resizes dynamically on window resize for responsiveness.
window.addEventListener("resize", function () {
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach(function(iframe) {
        // Adjust iframe size based on window width
        if (window.innerWidth < 768) {
            iframe.style.height = "400px";  // For mobile devices, shorter iframe
        } else {
            iframe.style.height = "600px";  // For larger screens
        }
    });
});

// Scroll smooth behavior for better navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle visibility for Power BI reports (optional functionality)
const toggleReports = document.querySelectorAll('.toggle-report');
toggleReports.forEach(function (button) {
    button.addEventListener('click', function () {
        const reportSection = document.getElementById(this.dataset.target);
        if (reportSection.style.display === 'none') {
            reportSection.style.display = 'block';
        } else {
            reportSection.style.display = 'none';
        }
    });
});

// Add more custom functionalities here based on your needs (e.g., interaction with the reports or custom data visualization enhancements)
