function loginWithFacebook() {
    // Replace with your Facebook login integration code
    alert('Logging in with Facebook...');
}

function loginWithGoogle() {
    // Replace with your Google login integration code
    alert('Logging in with Google...');
}

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // Validation (you can add more robust validation as needed)
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Simulate form submission (replace with actual backend integration)
    console.log('Full Name:', fullname);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Optionally, redirect to another page or show a success message
    alert('Signup Successful!');
});
