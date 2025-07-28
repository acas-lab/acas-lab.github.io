document.addEventListener('DOMContentLoaded', function() {
    // 클립보드에 복사하는 공통 함수
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(function() {
            alert('이메일 주소가 복사되었습니다: ' + text);
        }).catch(function(err) {
            console.error('클립보드 복사 실패:', err);
            alert('이메일 주소 복사에 실패했습니다. 직접 복사해주세요: ' + text);
        });
    }

    // --- 이메일 복사 기능 (기존 교수님 이메일과 추가된 멤버 이메일 모두 처리) ---

    // 1. 푸터의 교수님 이메일 주소 (아이콘 & 텍스트)
    const profEmailToCopy = 'jhong@uos.ac.kr'; // 교수님 이메일 주소

    const copyEmailIcon = document.getElementById('copyEmail');
    if (copyEmailIcon) {
        copyEmailIcon.addEventListener('click', function (event) {
            event.preventDefault();
            copyToClipboard(profEmailToCopy);
        });
    }

    const copyEmailTextLink = document.getElementById('copyEmailText');
    if (copyEmailTextLink) {
        copyEmailTextLink.addEventListener('click', function (event) {
            event.preventDefault();
            copyToClipboard(profEmailToCopy);
        });
    }

    // 2. 멤버 상세 페이지의 이메일 링크들 (새로 추가)
    const memberEmailLinks = document.querySelectorAll('.copy-email-member');
    // document.querySelectorAll은 NodeList를 반환하므로 forEach로 각 요소에 접근
    memberEmailLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // 기본 동작 (메일 클라이언트 열기) 방지
            const email = link.dataset.email; // data-email 속성에서 이메일 주소 가져오기
            if (email) {
                copyToClipboard(email);
            }
        });
    });
    // --- 이메일 복사 기능 끝 ---
});