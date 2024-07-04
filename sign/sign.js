document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('sign-up-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const passwordConfirm = document.getElementById('password-confirm').value;

        // 비밀번호 확인 일치 여부 체크
        if (password !== passwordConfirm) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        // 체크박스 확인
        if (!document.getElementById('terms').checked || !document.getElementById('privacy').checked) {
            alert('이용약관 및 개인정보처리방침에 동의해야 합니다.');
            return;
        }

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        window.location.href = '/2024-Herethon-9/setup/setup.html';
       
    });
});
