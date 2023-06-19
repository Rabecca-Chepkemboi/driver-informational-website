// Smooth scrolling when clicking on navigation links
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
    // Handle form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Get form values
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  
  // Perform form validation
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }
});
