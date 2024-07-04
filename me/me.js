    
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