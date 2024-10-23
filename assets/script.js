  document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
        item.classList.toggle('open');
        let toggle = item.querySelector('.toggle');
        toggle.textContent = toggle.textContent === '+' ? '-' : '+';
    });
});