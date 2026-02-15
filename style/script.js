onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    
    const music = document.getElementById('backgroundMusic');
    const playButton = document.getElementById('playButton');
    
    // Al hacer clic en el botón
    playButton.addEventListener('click', () => {
      music.volume = 0.3;
      music.play().then(() => {
        // Ocultar el botón con animación
        playButton.classList.add('hidden');
        console.log("¡Música reproduciéndose! 🎵");
      }).catch(error => {
        console.log("Error al reproducir:", error);
      });
    });
    
    function createShootingStar() {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      star.style.top = Math.random() * 60 + '%';
      star.style.animationDelay = '0s';
      star.style.animationDuration = (Math.random() * 1.5 + 2) + 's';
      
      document.querySelector('.shooting-stars').appendChild(star);
      
      setTimeout(() => {
        star.remove();
      }, 4000);
    }
    
    setInterval(() => {
      if (Math.random() > 0.3) { 
        createShootingStar();
      }
    }, Math.random() * 5000 + 3000);
    clearTimeout(c);
  }, 1000);
};