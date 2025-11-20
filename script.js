// Particles
    const pContainer = document.getElementById('particles');
    function createParticle() {
      const p = document.createElement('div');
      p.classList.add('particle');
      const size = Math.random() * 8 + 3;
      p.style.width = p.style.height = size + 'px';
      p.style.left = Math.random() * 100 + 'vw';
      p.style.animationDuration = 15 + Math.random() * 20 + 's';
      pContainer.appendChild(p);
      setTimeout(() => p.remove(), 40000);
    }
    setInterval(createParticle, 600);

    // No button runs away
    document.getElementById('noBtn').addEventListener('mouseover', function() {
      const x = Math.random() * (innerWidth - 200);
      const y = Math.random() * (innerHeight - 200);
      this.style.left = x + 'px';
      this.style.top = y + 'px';
      this.style.position = 'fixed';
    });

    // YES → show birthday page + start music
  const music = document.getElementById('bgMusic');
  document.getElementById('yesBtn').addEventListener('click',()=>{
    document.getElementById('questionScreen').style.display='none';
    document.getElementById('birthdayPage').classList.add('show');
    window.scrollTo(0,0);

    music.volume = 0.35;           // soft & classy
    music.play();                  // starts because user clicked
  });

  // STOP music automatically when she leaves the page
  window.addEventListener('beforeunload', () => music.pause());
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) music.pause();    // stops if she switches apps
    // optional: else music.play();        // resumes when she comes back
  });