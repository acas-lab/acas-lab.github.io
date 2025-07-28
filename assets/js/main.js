
const footer = document.querySelector('.footer-banner');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    footer.style.display = 'flex';
  } else {
    footer.style.display = 'none';
  }

  const copyEmailLink = document.getElementById('copyEmail');
  const emailToCopy = 'jhong@uos.ac.kr'; // 복사할 교수님 이메일 주소

  if (copyEmailLink) {
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
});