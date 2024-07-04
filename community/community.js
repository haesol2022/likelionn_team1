// 뒤로 가기 버튼
document.querySelector('.back-btn').addEventListener('click', function() {
    window.history.back();
});

// 홈 버튼
document.querySelector('.home-btn').addEventListener('click', function() {
    window.location.href = '../home/home.html';
});

// 검색 버튼
document.querySelector('.search-btn').addEventListener('click', function() {
    window.location.href = '../search/search.html';
});

// 스토리 페이지로 이동
function goToStoryPage() {
    window.location.href = '../story/story.html';
}

// 게시물 페이지로 이동
function goToPostPage() {
    window.location.href = '../feed/feed.html';
}

// 수정 페이지로 이동
function goToRevisePage() {
    window.location.href = '../feed_revise/feed_revise.html';
}


// 초기 좋아요 수 설정
let likeCount1 = 4289;
let likeCount2 = 3782;

// 첫 번째 포스트의 하트 아이콘 클릭 시 호출될 함수
function toggleLike1() {
    const likeIcon = document.getElementById('like-icon-1');
    const likeCount = document.getElementById('like-count-1');

    if (likeIcon.textContent === '🤍') {
        likeIcon.textContent = '❤️';
        likeCount.textContent = ++likeCount1;
    } else {
        likeIcon.textContent = '🤍';
        likeCount.textContent = --likeCount1;
    }
}

// 두 번째 포스트의 하트 아이콘 클릭 시 호출될 함수
function toggleLike2() {
    const likeIcon = document.getElementById('like-icon-2');
    const likeCount = document.getElementById('like-count-2');

    if (likeIcon.textContent === '🤍') {
        likeIcon.textContent = '❤️';
        likeCount.textContent = ++likeCount2;
    } else {
        likeIcon.textContent = '🤍';
        likeCount.textContent = --likeCount2;
    }
}


// 모달 토글 함수
function toggleModal(modalId, event) {
    const modal = document.getElementById(modalId);
    var btn = event.target; 

    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        // 버튼의 위치를 기준으로 계산
        var btnRect = btn.getBoundingClientRect();
        var modalWidth = modal.offsetWidth;
        var modalHeight = modal.offsetHeight;

        // 모달을 버튼 왼쪽으로 위치하도록 설정
        var modalLeft = btnRect.left - modalWidth + (btn.offsetWidth / 2) - 30; // 간격을 조정 (예: 10px 더 왼쪽으로)

        // 모달을 버튼 아래로 위치하도록 설정
        var modalTop = btnRect.top + btn.offsetHeight + 37; // 간격을 조정 (예: 20px 추가)

        modal.style.left = modalLeft + 'px';
        modal.style.top = modalTop + 'px';

        modal.style.display = 'block';
        }
    }


// 초기에 삭제 모달과 오버레이 숨기기
document.getElementById('delete-modal').style.display = 'none';
document.getElementById('overlay').style.display = 'none';

// 삭제 모달 토글 함수
function toggleDeleteModal() {
    const deleteModal = document.getElementById('delete-modal');
    const overlay = document.getElementById('overlay');

    if (deleteModal.style.display == 'block' && overlay.style.display == 'block') {
        deleteModal.style.display = 'none';
        overlay.style.display = 'none';
    } else {
        deleteModal.style.top = '50%';
        deleteModal.style.left = '50%';
        deleteModal.style.transform = 'translate(-50%, -50%)';

        deleteModal.style.display = 'block';
        overlay.style.display = 'block';
    }
}

// 삭제 버튼 클릭 시 처리할 함수
document.querySelector('.delete-btn').addEventListener('click', function() {
    toggleDeleteModal();
});




