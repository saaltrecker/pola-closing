// No session, API, analytics or audio dependencies. Language is the only stored preference.
(() => {
  const siteRoot = new URL('./', document.currentScript.src).pathname;
  let saved;
  try { saved = localStorage.getItem('pola.language'); } catch { /* Storage may be disabled. */ }
  if (location.pathname === siteRoot && saved === 'en') {
    location.replace(siteRoot + 'en/');
    return;
  }
  // Former invitation URLs may contain tokens; don't keep them on the closing page.
  if (location.search || location.hash) history.replaceState(null, '', location.pathname);
  document.querySelectorAll('[data-language]').forEach(link => {
    link.addEventListener('click', () => {
      try { localStorage.setItem('pola.language', link.dataset.language); } catch { /* Optional. */ }
    });
  });
})();
