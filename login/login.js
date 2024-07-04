document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // API 요청 준비
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        fetch('/accounts/login/', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                // 응답 데이터 처리
                console.log('성공:', data);
                // 토큰 저장
                localStorage.setItem('token', data.token);
                // 다른 페이지로 이동 (예: 메인 페이지)
                window.location.href = '/setup/setup.html';
            } else {
                console.error('실패:', data);
                alert('로그인에 실패했습니다. 다시 시도해주세요.');
            }
        })
        .catch((error) => {
            console.error('에러 발생:', error);
            alert('로그인 중 에러가 발생했습니다. 다시 시도해주세요.');
        });
    });
});
