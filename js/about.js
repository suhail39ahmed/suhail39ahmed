/* About section: bio tabs, stat counters, stack map. Vanilla JS; page works without it. */
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.add("js");

  // Bio tabs (WAI-ARIA tabs pattern, arrow/Home/End keys)
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.bio-tabs [role="tab"]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
      var panel = document.getElementById(t.getAttribute("aria-controls"));
      if (panel) panel.hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (tab, i) {
    tab.addEventListener("click", function () { select(tab, false); });
    tab.addEventListener("keydown", function (e) {
      var n = null;
      if (e.key === "ArrowRight") n = (i + 1) % tabs.length;
      else if (e.key === "ArrowLeft") n = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === "Home") n = 0;
      else if (e.key === "End") n = tabs.length - 1;
      if (n !== null) { e.preventDefault(); select(tabs[n], true); }
    });
  });
  if (tabs.length) select(tabs[0], false);

  // Stat counters (verified numbers only; final value is already in the HTML)
  var counts = document.querySelectorAll(".count");
  function run() {
    counts.forEach(function (el) {
      var target = Number(el.getAttribute("data-count") || el.textContent);
      if (reduce) { el.textContent = target; return; }
      var t0 = performance.now();
      (function tick(now) {
        var p = Math.min(1, (now - t0) / 1100);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }
  var stats = document.querySelector(".stats");
  if (stats && "IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { run(); io.disconnect(); }
    }, { threshold: 0.4 });
    io.observe(stats);
  }

  // Stack map: highlight production work and projects that use a skill
  var chips = Array.prototype.slice.call(document.querySelectorAll(".skill"));
  var items = Array.prototype.slice.call(document.querySelectorAll("[data-skills]"));
  var out = document.getElementById("skill-out");
  var idle = out ? out.innerHTML : "";
  function label(el) {
    var h = el.querySelector("h3");
    return h ? h.textContent.trim() : el.id;
  }
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var on = chip.getAttribute("aria-pressed") !== "true";
      chips.forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
      document.body.classList.toggle("skill-filter", on);
      var key = chip.getAttribute("data-skill");
      var hits = [];
      items.forEach(function (el) {
        var match = on && (" " + el.getAttribute("data-skills") + " ").indexOf(" " + key + " ") > -1;
        el.classList.toggle("is-hit", match);
        if (match) hits.push(el);
      });
      if (!on) { if (out) out.innerHTML = idle; return; }
      chip.setAttribute("aria-pressed", "true");
      if (!out) return;
      out.textContent = "";
      var lead = document.createElement("span");
      lead.textContent = chip.textContent + " → " + hits.length + (hits.length === 1 ? " match: " : " matches: ");
      out.appendChild(lead);
      hits.forEach(function (el, n) {
        var a = document.createElement("a");
        a.href = "#" + el.id;
        a.textContent = label(el);
        out.appendChild(a);
        if (n < hits.length - 1) out.appendChild(document.createTextNode(" · "));
      });
    });
  });
})();
