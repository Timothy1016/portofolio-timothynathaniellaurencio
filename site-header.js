(() => {
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('site-menu-toggle');
  if (!header || !toggle) return;
  const setOpen = (open) => {
    header.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  toggle.addEventListener('click', () => setOpen(!header.classList.contains('menu-open')));
  header.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => setOpen(false));
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && header.classList.contains('menu-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
  matchMedia('(max-width: 850px)').addEventListener('change', () => setOpen(false));
})();
