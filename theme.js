(function () {
  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');
  if (document.body.classList.contains('home')) {
    // Reserve warm hues and greens for the widget product pages.
    var hue = 190 + Math.floor(Math.random() * 71);
    root.style.setProperty('--home-hue', hue);
  }
  function update() {
    var light = root.dataset.theme === 'light';
    button.textContent = light ? 'Dark mode' : 'Light mode';
    button.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
  }
  update();
  button.addEventListener('click', function () {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
    update();
  });
}());
