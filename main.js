let current = 0;
    const screens = document.querySelectorAll('.screen');

    function showScreen(index) {
      screens.forEach((screen, i) => {
        if (i === index) {
          screen.classList.add('active');
        } else {
          screen.classList.remove('active');
        }
      });
    }

    function nextScreen() {
      if (current < screens.length - 1) {
        current++;
        showScreen(current);
      }
    }

    document.getElementById('name').textContent = 'Isa';

    window.onload = () => {
      const balloons = document.querySelectorAll('.balloon');
      balloons.forEach(balloon => {
        // Asignar retraso aleatorio entre 0 y 10 segundos
        const delay = Math.random() * 7;
        balloon.style.animationDelay = `${delay}s`;

        // Para que el balanceo empiece en diferente fase también:
        const swayDelay = Math.random() * 3;
        balloon.querySelector('.balloon-img').style.animationDelay = `${swayDelay}s`;
      });
};
