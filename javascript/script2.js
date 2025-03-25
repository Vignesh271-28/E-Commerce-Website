let navbar = document.querySelector('.nav-bar ul'); // Adjust selector as needed
let menuBtn = document.getElementById('menu-btn');
let passwordInput = document.getElementById('password');
let showPasswordBtn = document.getElementById('show-password-btn');

// Toggle menu
menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('menu-toggling');
});

// Show/hide password
function showPassword() {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
}

showPasswordBtn.addEventListener('click', showPassword);