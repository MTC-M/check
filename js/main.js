// main.js
document.addEventListener('DOMContentLoaded', () => {
  const layout = document.querySelector('.layout');
  const themeToggleButton = document.querySelector('.theme-toggle');

  if (layout && !layout.getAttribute('data-theme')) {
    layout.setAttribute('data-theme', 'three-panes-positive');
  }

  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', () => {
      const currentTheme = layout.getAttribute('data-theme');
      const newTheme = currentTheme === 'three-panes-positive' ? 'three-panes-negative' : 'three-panes-positive';
      layout.setAttribute('data-theme', newTheme);
    });
  }
});