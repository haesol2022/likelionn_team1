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
        formData.append('profile_image', profileImageInput.files[0]);
        formData.append('baby_nickname', document.getElementById('baby-nickname').value);
        formData.append('baby_birth', babyBirth);
        formData.append('baby_gender', selectedGender);
        formData.append('mother_nickname', document.getElementById('mother-nickname').value);
        formData.append('mother_birth', motherBirth);

        fetch('/accounts/register/', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token') // 토큰을 로컬 저장소에서 가져와서 헤더에 추가
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                // 응답 데이터 처리
                console.log('성공:', data);
                // 토큰 저장
                localStorage.setItem('token', data.token);
                // 추가 처리 로직 (예: 페이지 이동)
            } else {
                console.error('실패:', data);
            }
        })
        .catch((error) => {
            console.error('에러 발생:', error);
        });
    });
});
