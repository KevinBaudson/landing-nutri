  const mobileBtn = document.getElementById('mobile-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });


  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });