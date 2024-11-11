// Smoth Scroll
document.addEventListener('DOMContentLoaded', function () {
  // Ambil semua link dalam navbar, termasuk yang di dalam dropdown
  const linksEl = document.querySelectorAll(
    '.navbar a, .collapse-content a, .btn-peta'
  );

  linksEl.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar.offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });

        const dropdown = document.querySelector('.dropdown');
        if (dropdown) {
          dropdown.classList.remove('open');
        }
      }
    });
  });
});
