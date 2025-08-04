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