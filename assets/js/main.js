document.addEventListener('DOMContentLoaded', function() {
    // 푸터 스크롤 표시/숨김 기능
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

    // --- 이메일 복사 기능 ---
    const emailToCopy = 'jhong@uos.ac.kr'; // 복사할 교수님 이메일 주소 (변수로 정의하여 재활용)

    // 1. 이메일 아이콘 복사 기능
    const copyEmailIcon = document.getElementById('copyEmail');
    if (copyEmailIcon) {
        copyEmailIcon.addEventListener('click', function (event) {
            event.preventDefault(); // 링크의 기본 동작 (페이지 이동 또는 mailto) 방지
            copyToClipboard(emailToCopy); // 공통 함수 호출
        });
    }

    // 2. 텍스트 이메일 링크 복사 기능 (새로 추가)
    const copyEmailTextLink = document.getElementById('copyEmailText');
    if (copyEmailTextLink) {
        copyEmailTextLink.addEventListener('click', function (event) {
            event.preventDefault(); // 링크의 기본 동작 (메일 클라이언트 열기) 방지
            copyToClipboard(emailToCopy); // 공통 함수 호출
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