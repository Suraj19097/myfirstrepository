function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required.";
        errorMessage.style.display = "block";
        return false;
    }

    // Additional validation logic can go here

    // If validation passes
    errorMessage.style.display = "none";
    alert('Login successful!'); // Replace with actual login logic
    return false; // Prevent form submission for demonstration purposes
}
