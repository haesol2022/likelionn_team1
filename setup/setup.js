document.addEventListener('DOMContentLoaded', function () {
    const maleBtn = document.getElementById('male-btn');
    const femaleBtn = document.getElementById('female-btn');
    const profileImg = document.getElementById('profile-img');
    const profileImageInput = document.getElementById('profile-image');
    let selectedGender = '';

    maleBtn.addEventListener('click', function () {
        maleBtn.classList.add('active');
        femaleBtn.classList.remove('active');
        selectedGender = maleBtn.value;
    });

    femaleBtn.addEventListener('click', function () {
        femaleBtn.classList.add('active');
        maleBtn.classList.remove('active');
        selectedGender = femaleBtn.value;
    });

    profileImg.addEventListener('click', function () {
        profileImageInput.click();
    });

    profileImageInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            profileImg.src = e.target.result;
        }

        if (file) {
            reader.readAsDataURL(file);
        }
    });

    const form = document.getElementById('setup-form');
    form.addEventListener('submit', function (e) {
    e.preventDefault();

    const babyBirth = `${document.getElementById('baby-birth-year').value}-${document.getElementById('baby-birth-month').value}-${document.getElementById('baby-birth-day').value}`;
    const motherBirth = `${document.getElementById('mother-birth-year').value}-${document.getElementById('mother-birth-month').value}-${document.getElementById('mother-birth-day').value}`;

    const formData = new FormData();
    formData.append('username', localStorage.getItem('username'));
    formData.append('password', localStorage.getItem('password'));
    formData.append('profile_image', profileImageInput.files[0]);
    formData.append('baby_nickname', document.getElementById('baby-nickname').value);
    formData.append('baby_birth', babyBirth);
    formData.append('baby_gender', selectedGender);
    formData.append('mother_nickname', document.getElementById('mother-nickname').value);
    formData.append('mother_birth', motherBirth);

    fetch('http://127.0.0.1:8000/accounts/register/', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            console.log('성공:', data);
            localStorage.setItem('token', data.token);
            window.location.href = '/2024-Herethon-9/login/login.html';
        } else {
            console.error('실패:', data);
        }
    })
    .catch((error) => {
        console.error('네트워크 오류:', error);
        // 적절한 오류 처리 로직 추가
    });
});
});