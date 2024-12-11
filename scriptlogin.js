// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const aadharInput = document.getElementById('aadhar');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const aadharValue = aadharInput.value.trim();

        // Validate Aadhaar number
        if (aadharValue.length !== 12 || isNaN(aadharValue)) {
            errorMessage.textContent = 'Please enter a valid 12-digit Aadhaar number.';
            errorMessage.style.color = 'red';
        } else {
            errorMessage.textContent = ''; // Clear any previous error messages
            window.location.href = 'index.html'; // Redirect to index.html
        }
    });
});
