
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

    // 아기 패션 이동 버튼
    document.querySelector('.fashion-btn').addEventListener('click', function() {
        window.location.href = '../baby_fashion/baby_fashion.html';
    });