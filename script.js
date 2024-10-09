document.getElementById('registrationForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate successful registration
    document.getElementById('message').textContent = `Registration successful for ${username}!`;

    // Optionally, redirect after a delay
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000); // Redirect after 2 seconds
});

document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const username = document.getElementById('loginUsername').value;

    // Simulate successful login
    document.getElementById('loginMessage').textContent = `Login successful for ${username}!`;

    // Optionally, redirect after a delay
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000); // Redirect after 2 seconds
});

document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    // Simulate successful message sending
    document.getElementById('contactMessageDisplay').textContent = `Thank you, ${name}! Your message has been sent.`;

    // Optionally, clear the form after submission
    document.getElementById('contactForm').reset();
});
