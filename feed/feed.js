
document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('file-upload');
    const postText = document.querySelector('.post-text');
    const shareBtn = document.querySelector('.share-btn');

    if (!fileInput || !postText || !shareBtn) {
        console.error('필수 요소를 찾을 수 없습니다.');
        return;
    }

    // ... 이미지 업로드

    shareBtn.addEventListener('click', function() {
        const images = [];
        const imgElements = document.querySelectorAll('.uploaded-image');
        imgElements.forEach(img => {
            images.push(img.src);
        });

        const textContent = postText.value;

        const formData = new FormData();
        formData.append('user', 1); // 임시 사용자 아이디
        formData.append('content', textContent);
        images.forEach((imageUrl, index) => {
            formData.append(`images[${index}]`, imageUrl);
        });

        axios.post('http://localhost:8000/community/posts/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log('게시물이 성공적으로 업로드되었습니다.');
            // 업로드 성공 후 작업 추가
        })
        .catch(error => {
            console.error('게시물 업로드 중 오류가 발생했습니다:', error);
            // 오류 처리
        });
    });
});


// 뒤로 가기 버튼
document.querySelector('.back-btn').addEventListener('click', function() {
    window.history.back();
});