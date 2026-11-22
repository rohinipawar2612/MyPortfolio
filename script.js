
let name = "Rohini";
let age = 21;

console.log("Welcome " + name);
console.log("Age: " + age);

function showMessage() {
    alert("Welcome to My Portfolio!");
}


// Mobile Navigation Menu

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }

});


// Close menu after clicking a link

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {
        navbar.classList.remove("active");
        menuBtn.innerHTML = "☰";
    });

});


// Dark / Light Mode Toggle

const themeBtn = document.getElementById("theme-toggle");

// Set initial mode
themeBtn.innerHTML = "☀️";

// Toggle Theme
themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeBtn.innerHTML = "🌙";

    } else {

        themeBtn.innerHTML = "☀️";

    }

});


/* ===== SCROLL ANIMATIONS ===== */

// Select website sections and cards

const revealElements = document.querySelectorAll(
    "#home .hero-text, #home .hero-image, " +
    "section:not(#home) .heading, " +
    ".about-box, .education-box, " +
    ".skill-card, .internship-content, " +
    ".contact-container"
);

// Add animation class

revealElements.forEach(function(element) {
    element.classList.add("reveal");
});

// Detect scrolling

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

// Observe all elements

revealElements.forEach(function(element) {
    observer.observe(element);
});


/* ===== CONTACT FORM VALIDATION ===== */

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    const error = document.getElementById("form-error");
    const success = document.getElementById("form-success");

    // Clear previous messages

    error.textContent = "";
    success.textContent = "";

    // Remove old validation classes

    const fields = document.querySelectorAll(
        "#contact-form input, #contact-form textarea"
    );

    fields.forEach(function(field) {
        field.classList.remove("valid", "invalid");
    });


    // Name Validation

    if (name === "") {

        error.textContent = "Please enter your name.";

        document.getElementById("contact-name").classList.add("invalid");

        document.getElementById("contact-name").focus();

        return;
    }


    // Email Validation

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        error.textContent = "Please enter a valid email address.";

        document.getElementById("contact-email").classList.add("invalid");

        document.getElementById("contact-email").focus();

        return;
    }


    // Message Validation

    if (message === "") {

        error.textContent = "Please enter your message.";

        document.getElementById("contact-message").classList.add("invalid");

        document.getElementById("contact-message").focus();

        return;
    }


    // Success Message

    success.textContent = "Thank you! Your form is valid.";

    fields.forEach(function(field) {
        field.classList.add("valid");
    });

    // Reset Form

    contactForm.reset();

});
