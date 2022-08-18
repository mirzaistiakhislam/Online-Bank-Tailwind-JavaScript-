document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const email = emailField.value;

    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;


    if (email === 'abid@gmail' && password === '2022') {
        window.location.href = 'dashboard.html';
    }
    else {
        alert('Enter valid email and password');
    }

})