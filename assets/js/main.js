document.addEventListener('DOMContentLoaded', function() {
    // --- 푸터 스크롤 표시/숨김 기능 (이 부분은 이전과 동일하게 유지) ---
    const footer = document.querySelector('.footer-banner');
    window.addEventListener('scroll', () => {
        if (footer) {
            if (window.scrollY > 50) {
                footer.style.display = 'flex';
            } else {
                footer.style.display = 'none';
            }
        }
    });

    // --- 이메일 복사 기능 (이 부분이 중요! DOMContentLoaded 안에 있고, 스크롤 이벤트 밖에 있어야 함) ---
    const emailToCopy = 'jhong@uos.ac.kr'; // 복사할 이메일 주소

    // 이메일 아이콘 복사 기능
    const copyEmailIcon = document.getElementById('copyEmail');
    if (copyEmailIcon) { // 요소가 존재할 때만 이벤트 리스너를 추가
        copyEmailIcon.addEventListener('click', function (event) {
            event.preventDefault(); // 기본 동작 방지
            copyToClipboard(emailToCopy); // 공통 복사 함수 호출
        });
    }

    // 텍스트 이메일 링크 복사 기능
    const copyEmailTextLink = document.getElementById('copyEmailText');
    if (copyEmailTextLink) { // 요소가 존재할 때만 이벤트 리스너를 추가
        copyEmailTextLink.addEventListener('click', function (event) {
            event.preventDefault(); // 기본 동작 방지
            copyToClipboard(emailToCopy); // 공통 복사 함수 호출
        });
    }

    // 클립보드에 복사하는 공통 함수
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(function() {
            alert('이메일 주소가 복사되었습니다: ' + text);
        }).catch(function(err) {
            console.error('클립보드 복사 실패:', err);
            alert('이메일 주소 복사에 실패했습니다. 직접 복사해주세요: ' + text);
        });
    }
    // --- 이메일 복사 기능 끝 ---
});