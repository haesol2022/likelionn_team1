document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.login-btn');
    const signupButton = document.querySelector('.signup-btn');

    loginButton.addEventListener('click', function () {
        window.location.href = '../login/login.html';
    });

    signupButton.addEventListener('click', function () {
        window.location.href = '../sign/sign.html';
    });
});
