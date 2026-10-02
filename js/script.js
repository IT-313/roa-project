// script.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully!");

  // Highlight the active nav link
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active-link");
    }

    // Log navigation clicks
    link.addEventListener("click", () => {
      console.log(`Navigating to ${link.textContent} page`);
    });
  });

  // Add alerts to "Learn More" buttons in Services
  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("More details coming soon!");
    });
  });

  // Contact form validation
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // prevent page reload
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name && email && message) {
        alert("Thank you for contacting us, " + name + "! We'll reply soon.");
        contactForm.reset();
      } else {
        alert("Please fill out all fields before submitting.");
      }
    });
  }
});
