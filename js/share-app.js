(function () {
  'use strict';

  var allowedPages = ['home', 'utm-learn', 'app-marketing', 'app-marketing-setup'];
  var rendered = {};
  var titles = {
    home: '🏠 홈 대시보드',
    'utm-learn': '🎯 UTM 완전정복',
    'app-marketing': '📱 App 마케팅 완전정복',
    'app-marketing-setup': '🧭 App 마케팅 세팅 가이드'
  };
  var renderers = {
    'utm-learn': function () { if (window.renderUtmLearn) window.renderUtmLearn(); },
    'app-marketing': function () { if (window.renderAppMarketing) window.renderAppMarketing(); },
    'app-marketing-setup': function () { if (window.renderAppMarketingSetup) window.renderAppMarketingSetup(); }
  };

  function isAllowed(id) { return allowedPages.indexOf(id) !== -1; }

  window.showPage = function (id) {
    if (!isAllowed(id)) id = 'home';
    document.querySelectorAll('.page').forEach(function (page) { page.classList.remove('active'); });
    var page = document.getElementById('page-' + id);
    if (!page) return;
    page.classList.add('active');

    if (!rendered[id] && renderers[id]) {
      renderers[id]();
      rendered[id] = true;
    }

    document.querySelectorAll('.nav-item').forEach(function (item) {
      var active = item.getAttribute('data-page') === id;
      item.classList.toggle('active', active);
      if (active) item.setAttribute('aria-current', 'page');
      else item.removeAttribute('aria-current');
    });

    var mtTitle = document.getElementById('mtTitle');
    if (mtTitle) mtTitle.textContent = titles[id] || titles.home;
    if (location.hash !== '#' + id) history.pushState(null, '', '#' + id);
    document.title = (titles[id] || titles.home).replace(/^\S+\s/, '') + ' | PLAY.D 마케팅 학습 허브';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    var sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('open')) window.toggleSidebar();
  };

  window.toggleSidebar = function () {
    var sidebar = document.getElementById('sidebar');
    var scrim = document.getElementById('sidebarScrim');
    if (sidebar) sidebar.classList.toggle('open');
    if (scrim) scrim.classList.toggle('active');
  };

  window.copyToClipboard = function (value, button) {
    var original = button ? button.innerHTML : '';
    var finish = function (ok) {
      if (!button) return;
      button.innerHTML = ok ? '복사됨 ✓' : '복사 실패';
      window.setTimeout(function () { button.innerHTML = original; }, 1400);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(function () { finish(true); }, function () { finish(false); });
    } else {
      finish(false);
    }
  };

  window.addEventListener('popstate', function () {
    var id = location.hash.replace('#', '') || 'home';
    window.showPage(isAllowed(id) ? id : 'home');
  });

  document.addEventListener('DOMContentLoaded', function () {
    var id = location.hash.replace('#', '') || 'home';
    window.showPage(isAllowed(id) ? id : 'home');
  });
})();
