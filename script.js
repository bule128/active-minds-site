// Newsletter form
document.getElementById("newsletter-form").addEventListener("submit", function(e) {
  e.preventDefault(); // stop page reload

  // Show success message
  const successMessage = document.getElementById("success-message");
  successMessage.style.display = "block";

  // Clear input field
  document.getElementById("email").value = "";

  // Hide message after 5 seconds (optional) "will take out soon"
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 5000);
});

// Handle Support Form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("supportForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simple validation
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const type = document.getElementById("support-type").value;

    if (!name || !email || !type) {
      message.style.color = "red";
      message.textContent = "⚠ Please fill in all required fields.";
      return;
    }

    // Simulate success (you can integrate email service later)
    message.style.color = "green";
    message.textContent = "✅ Thank you! We’ll get back to you soon.";
    form.reset();
  });
});
// Handle Contact Form
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const contactMessage = document.getElementById("contactMessage");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("cname").value.trim();
      const email = document.getElementById("cemail").value.trim();
      const subject = document.getElementById("csubject").value.trim();
      const message = document.getElementById("cmessage").value.trim();

      if (!name || !email || !subject || !message) {
        contactMessage.style.color = "red";
        contactMessage.textContent = "⚠ Please fill in all fields.";
        return;
      }

      contactMessage.style.color = "green";
      contactMessage.textContent = "✅ Thank you! Your message has been sent.";
      contactForm.reset();
    });
  }
});
// Hamburger toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

