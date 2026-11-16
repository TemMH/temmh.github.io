/* Animated halftone background, grouped into a small number of canvas draws. */
(() => {
  function initialize() {
    const canvas = document.createElement('canvas');
    canvas.className = 'ambient-wave';
    canvas.setAttribute('aria-hidden', 'true');
    const context = canvas.getContext('2d', { alpha: true });
    if (!context) return;
    document.body.prepend(canvas);

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const levels = 8;
    const pointStride = 8;
    const frameDelay = 80;
    let width = 0;
    let height = 0;
    let points = new Float32Array(0);
    let frame = 0;
    let timer = 0;
    let resizeFrame = 0;
    let lastDraw = 0;
    let phase = 0;

    function resize() {
      resizeFrame = 0;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.25);
      width = window.innerWidth;
      height = window.innerHeight;
      const spacing = width < 600 ? 12 : 10;
      const diagonal = Math.max(width, height);
      const columns = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);
      points = new Float32Array(columns * rows * pointStride);
      let i = 0;
      for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
          const nx = x / diagonal;
          const ny = y / diagonal;
          const a = nx * 10 + ny * 7;
          const b = nx * 5 - ny * 11;
          const c = nx * 15 + ny * 4;
          points.set([x, y, Math.sin(a), Math.cos(a), Math.sin(b), Math.cos(b), Math.cos(c), Math.sin(c)], i);
          i += pointStride;
        }
      }
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw(phase);
    }

    function draw(time) {
      context.clearRect(0, 0, width, height);
      const paths = Array.from({ length: levels }, () => new Path2D());
      const sinA = Math.sin(time), cosA = Math.cos(time);
      const sinB = Math.sin(time * .65), cosB = Math.cos(time * .65);
      const sinC = Math.sin(time * .4), cosC = Math.cos(time * .4);
      for (let i = 0; i < points.length; i += pointStride) {
        const wave = points[i + 2] * cosA + points[i + 3] * sinA
          + .62 * (points[i + 4] * cosB - points[i + 5] * sinB)
          + .32 * (points[i + 6] * cosC - points[i + 7] * sinC);
        const intensity = Math.max(0, Math.min(1, (wave + .45) / 1.9));
        if (intensity < .08) continue;
        const level = Math.min(levels - 1, Math.floor(intensity * levels));
        paths[level].rect(points[i], points[i + 1], 1.6, 1.6);
      }
      context.fillStyle = '#c49a73';
      for (let level = 0; level < levels; level++) {
        context.globalAlpha = .05 + ((level + .5) / levels) * .62;
        context.fill(paths[level]);
      }
      context.globalAlpha = 1;
    }

    function tick(now) {
      frame = 0;
      if (document.hidden || motion.matches) return;
      phase += Math.min(now - lastDraw, 250) * .00022;
      lastDraw = now;
      draw(phase);
      timer = window.setTimeout(() => {
        timer = 0;
        frame = requestAnimationFrame(tick);
      }, frameDelay);
    }

    function updateMotion() {
      if (frame) cancelAnimationFrame(frame);
      if (timer) clearTimeout(timer);
      frame = 0;
      timer = 0;
      if (document.hidden || motion.matches) { draw(phase); return; }
      lastDraw = performance.now();
      frame = requestAnimationFrame(tick);
    }

    window.addEventListener('resize', () => {
      if (!resizeFrame) resizeFrame = requestAnimationFrame(resize);
    }, { passive: true });
    document.addEventListener('visibilitychange', updateMotion);
    motion.addEventListener('change', updateMotion);
    resize();
    updateMotion();
  }

  // Wait until the saved React page has hydrated and completed its loader.
  if (document.body.classList.contains('is-loaded')) {
    initialize();
  } else {
    const observer = new MutationObserver(() => {
      if (!document.body.classList.contains('is-loaded')) return;
      observer.disconnect();
      initialize();
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  }
})();
