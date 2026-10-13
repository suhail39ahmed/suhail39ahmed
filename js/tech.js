(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function animateCounts() {
    document.querySelectorAll(".count").forEach(function (el) {
      var target = Number(el.getAttribute("data-count") || "0");
      if (reduce) {
        el.textContent = String(target);
        return;
      }
      var start = 0;
      var began = performance.now();
      function tick(now) {
        var p = Math.min(1, (now - began) / 1100);
        el.textContent = String(Math.round(start + (target - start) * p));
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounts();
          io.disconnect();
        }
      });
    }, { threshold: 0.3 });
    var metrics = document.querySelector(".metrics");
    if (metrics) io.observe(metrics);
  } else {
    animateCounts();
  }
})();
