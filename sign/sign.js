document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('sign-up-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
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

        // API 요청 준비
        const formData = new FormData();
        formData.append('username', email);
        formData.append('password', password);

        fetch('/accounts/register/', {
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
                // setup 페이지로 이동
                window.location.href = '/setup/setup.html';
            } else {
                console.error('실패:', data);
                alert('회원가입에 실패했습니다. 다시 시도해주세요.');
            }
        })
        .catch((error) => {
            console.error('에러 발생:', error);
            alert('회원가입 중 에러가 발생했습니다. 다시 시도해주세요.');
        });
    });
});
