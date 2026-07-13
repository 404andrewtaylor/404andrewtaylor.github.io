(function () {
  const toggle = document.querySelector('.nav-toggle');
  const sidebar = document.querySelector('.sidebar');

  if (!toggle || !sidebar) return;

  toggle.hidden = false;

  toggle.addEventListener('click', () => {
    const open = sidebar.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', (e) => {
    if (
      sidebar.classList.contains('open') &&
      !sidebar.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      sidebar.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  sidebar.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
