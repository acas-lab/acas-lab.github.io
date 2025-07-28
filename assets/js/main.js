document.addEventListener('DOMContentLoaded', function() {
    // 푸터 스크롤 표시/숨김 기능
    const footer = document.querySelector('.footer-banner');
    // 초기 로드 시 푸터가 보이도록 설정 (선택 사항, CSS에서 display:flex로 설정되어 있다면 필요 없음)
    // if (footer) {
    //     footer.style.display = 'flex';
    // }

    window.addEventListener('scroll', () => {
        if (footer) { // footer 요소가 존재하는지 확인하는 방어 코드
            if (window.scrollY > 50) {
                footer.style.display = 'flex';
            } else {
                footer.style.display = 'none';
            }
        }
    });

    // --- 이메일 복사 기능 (여기서부터 수정) ---
    const copyEmailLink = document.getElementById('copyEmail');
    const emailToCopy = 'jhong@uos.ac.kr'; // 복사할 교수님 이메일 주소

    if (copyEmailLink) { // copyEmailLink 요소가 존재하는지 확인
        copyEmailLink.addEventListener('click', function (event) {
            event.preventDefault(); // 링크의 기본 동작 (페이지 이동 또는 mailto) 방지

            // 클립보드에 텍스트 복사
            navigator.clipboard.writeText(emailToCopy).then(function () {
                alert('교수님 이메일 주소가 복사되었습니다: ' + emailToCopy);
            }).catch(function (err) {
                console.error('클립보드 복사 실패:', err);
                alert('이메일 주소 복사에 실패했습니다. 직접 복사해주세요: ' + emailToCopy);
            });
        });
    }
    // --- 이메일 복사 기능 끝 ---
});