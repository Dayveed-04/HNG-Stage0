const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  const errors = {
    name: document.getElementById('error-name'),
    email: document.getElementById('error-email'),
    subject: document.getElementById('error-subject'),
    message: document.getElementById('error-message')
  };

  // Reset messages
  Object.values(errors).forEach(span => span.textContent = '');

  // Validate
  if (!name.value.trim()) {
    errors.name.textContent = 'Full name is required';
    valid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!email.value.match(emailPattern)) {
    errors.email.textContent = 'Enter a valid email address';
    valid = false;
  }

  if (!subject.value.trim()) {
    errors.subject.textContent = 'Subject is required';
    valid = false;
  }

  if (message.value.trim().length < 10) {
    errors.message.textContent = 'Message must be at least 10 characters';
    valid = false;
  }

  if (valid) {
    successMessage.hidden = false;
    form.reset();
  } else {
    successMessage.hidden = true;
  }
});
