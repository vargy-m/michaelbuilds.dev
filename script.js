// Custom cursor
    const cursor = document.getElementById('cursor');
    const ring   = document.getElementById('ring');
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top  = my + 'px';
    });

    (function animateRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(animateRing);
    })();

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width  = '18px';
        cursor.style.height = '18px';
        cursor.style.opacity = '.5';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width  = '10px';
        cursor.style.height = '10px';
        cursor.style.opacity = '1';
      });
    });

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
      fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
      }).then(response => {
        if (response.ok) {
            this.style.display = 'none';
            document.getElementById('formSuccess').style.display = 'block';
        } else {
            alert('Something went wrong, please try again.');
        }
      });
    });

    document.getElementById('copyright-year').textContent = new Date().getFullYear();