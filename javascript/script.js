let navbar = document.querySelector('.nav-bar ul'); // Adjust selector as needed
let menuBtn = document.getElementById('menu-btn');
let passwordInput = document.getElementById('password');
let showPasswordBtn = document.getElementById('show-password-btn');
let loginInputs = document.querySelectorAll('#login-inputs input');
let alertText = document.getElementById('alert-text');

// Toggle menu
menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('menu-toggling');
});

// Show/hide password
function showPassword() {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
}

showPasswordBtn.addEventListener('click', showPassword);

// Verify input fields
function verify() {
    let isEmpty = false;
    loginInputs.forEach(input => {
        if (input.value.trim() === '') {
            isEmpty = true;
        }
    });
    if (isEmpty) {
        alertText.innerHTML = 'Please fill in all fields';
    } else {
        alertText.innerHTML = ''; // Clear alert if all fields are filled
    }
}
