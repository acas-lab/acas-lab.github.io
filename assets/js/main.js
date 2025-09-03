document.addEventListener('DOMContentLoaded', function() {
  // 1) 공통 복사 함수 (옵션 지원)
  function copyToClipboard(text, opts = {}) {
    const {
      alertOnSuccess = true,
      successMsg = '복사되었습니다: ' + text,
      errorMsg   = '복사에 실패했습니다. 직접 복사해주세요: ' + text
    } = opts;

    const doWrite = () =>
      navigator.clipboard.writeText(text).then(() => {
        if (alertOnSuccess) alert(successMsg);
      }).catch(err => {
        console.error('클립보드 복사 실패:', err);
        alert(errorMsg);
      });

    if (navigator.clipboard && window.isSecureContext) return doWrite();

    // fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.focus(); ta.select();
    try {
      document.execCommand('copy');
      if (alertOnSuccess) alert(successMsg);
    } catch (err) {
      console.error('execCommand copy 실패:', err);
      alert(errorMsg);
    } finally {
      document.body.removeChild(ta);
    }
  }

  // 2) 이메일 복사 (푸터)
  const profEmailToCopy = 'jhong@uos.ac.kr';
  const copyEmailIcon = document.getElementById('copyEmail');
  if (copyEmailIcon) {
    copyEmailIcon.addEventListener('click', function (event) {
      event.preventDefault();
      copyToClipboard(profEmailToCopy, {
        successMsg: '이메일 주소가 복사되었습니다: ' + profEmailToCopy,
        errorMsg:   '이메일 주소 복사에 실패했습니다. 직접 복사해주세요: ' + profEmailToCopy
      });
    });
  }
  const copyEmailTextLink = document.getElementById('copyEmailText');
  if (copyEmailTextLink) {
    copyEmailTextLink.addEventListener('click', function (event) {
      event.preventDefault();
      copyToClipboard(profEmailToCopy, {
        successMsg: '이메일 주소가 복사되었습니다: ' + profEmailToCopy,
        errorMsg:   '이메일 주소 복사에 실패했습니다. 직접 복사해주세요: ' + profEmailToCopy
      });
    });
  }

  // 3) 멤버 상세 이메일 복사
  const memberEmailLinks = document.querySelectorAll('.copy-email-member');
  memberEmailLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const email = link.dataset.email;
      if (email) {
        copyToClipboard(email, {
          successMsg: '이메일 주소가 복사되었습니다: ' + email,
          errorMsg:   '이메일 주소 복사에 실패했습니다. 직접 복사해주세요: ' + email
        });
      }
    });
  });

  // 4) Publication 제목 복사 (알림 X, 토스트만)
  function enablePublicationTitleCopy() {
    const links = document.querySelectorAll('.pub-title a');
    if (!links.length) return;

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button === 1) return; // 새탭 등
        e.preventDefault();

        const title = link.textContent.replace(/\s+/g, ' ').trim();
        copyToClipboard(title, {
          alertOnSuccess: false,
          errorMsg: '논문 제목 복사에 실패했습니다. 직접 복사해주세요: ' + title
        });

        link.classList.add('copied');
        setTimeout(() => link.classList.remove('copied'), 1400);
      });
    });
  }
  enablePublicationTitleCopy();

  // 5) Mobile navigation toggle
  const navToggleBtn = document.querySelector('.nav-toggle');
  const siteNav = document.getElementById('site-nav');
  if (navToggleBtn && siteNav) {
    navToggleBtn.addEventListener('click', function () {
      siteNav.classList.toggle('is-open');
      const expanded = siteNav.classList.contains('is-open');
      navToggleBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });

    // Close menu on link click (mobile UX)
    siteNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.matchMedia('(max-width: 767px)').matches) {
          siteNav.classList.remove('is-open');
          navToggleBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
});
