(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var cursor = document.getElementById("cursor");
  var progress = document.getElementById("progress");
  var boot = document.getElementById("boot");

  function field() {
    var canvas = document.getElementById("field");
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    var packets = [];
    function size() {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      packets = Array.from({ length: 28 }, function (_, i) {
        return {
          x: Math.random() * canvas.width,
          y: (i % 8) * 90 + 40,
          v: 0.6 + Math.random() * 1.4,
          horizontal: i % 2 === 0
        };
      });
    }
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(124,179,255,0.05)";
      ctx.lineWidth = 1;
      for (var x = 0; x < canvas.width; x += 48) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      ctx.fillStyle = "rgba(103,240,180,0.7)";
      packets.forEach(function (p) {
        if (p.horizontal) {
          p.x += p.v;
          if (p.x > canvas.width) p.x = 0;
        } else {
          p.y += p.v;
          if (p.y > canvas.height) p.y = 0;
        }
        ctx.fillRect(p.x, p.y, 8, 2);
      });
      if (!reduce) requestAnimationFrame(draw);
    }
    size();
    addEventListener("resize", size);
    draw();
  }

  function telemetry() {
    var state = { cpu: 34, gpu: 46, mem: 61, net: 18 };
    var waves = {
      cpu: { el: document.getElementById("cpu-wave"), hist: [] },
      gpu: { el: document.getElementById("gpu-wave"), hist: [] }
    };

    function walk(key, min, max) {
      state[key] += (Math.random() - 0.48) * 8;
      state[key] = Math.max(min, Math.min(max, state[key]));
      var n = Math.round(state[key]);
      var val = document.getElementById(key + "-val");
      var bar = document.getElementById(key + "-bar");
      if (val) val.textContent = n + "%";
      if (bar) bar.style.width = n + "%";
      return n;
    }

    function drawWave(key, color) {
      var item = waves[key];
      if (!item.el) return;
      var ctx = item.el.getContext("2d");
      var w = item.el.width;
      var h = item.el.height;
      item.hist.push(state[key] / 100);
      if (item.hist.length > 40) item.hist.shift();
      ctx.clearRect(0, 0, w, h);
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.4;
      item.hist.forEach(function (v, i) {
        var x = (i / 39) * w;
        var y = h - v * (h - 4) - 2;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
    }

    function tick() {
      walk("cpu", 18, 92);
      walk("gpu", 22, 96);
      walk("mem", 48, 78);
      walk("net", 8, 70);
      drawWave("cpu", "#67f0b4");
      drawWave("gpu", "#7cb3ff");
      if (!reduce) setTimeout(tick, 380);
    }
    tick();
  }

  function pipeline() {
    var root = document.getElementById("stages");
    var run = document.getElementById("run-id");
    if (!root) return;
    var spec = [
      { name: "Build", jobs: ["lint", "compile", "container"] },
      { name: "Test", jobs: ["unit", "e2e", "load"] },
      { name: "Security", jobs: ["sast", "policy", "secrets"] },
      { name: "Deploy", jobs: ["staging", "prod-gate"] },
      { name: "Observe", jobs: ["grafana", "sentinel"] }
    ];
    var queue = [];
    spec.forEach(function (stage, si) {
      stage.jobs.forEach(function (job, ji) {
        queue.push({ si: si, ji: ji, delay: (si * 3 + ji) * 700 });
      });
    });

    var runNo = 1842;
    function reset() {
      root.querySelectorAll(".job").forEach(function (el) {
        el.className = "job queued";
      });
      root.querySelectorAll(".stage").forEach(function (el) {
        el.classList.remove("is-active");
      });
    }

    function play() {
      reset();
      runNo += 1;
      if (run) run.textContent = "#" + runNo + " · running";
      queue.forEach(function (item) {
        setTimeout(function () {
          var stage = root.children[item.si];
          var job = stage.querySelectorAll(".job")[item.ji];
          Array.prototype.forEach.call(root.children, function (s) { s.classList.remove("is-active"); });
          stage.classList.add("is-active");
          job.className = "job running";
          setTimeout(function () {
            job.className = "job success";
            if (item.si === spec.length - 1 && item.ji === spec[item.si].jobs.length - 1) {
              if (run) run.textContent = "#" + runNo + " · succeeded";
              setTimeout(play, 1600);
            }
          }, 620);
        }, item.delay);
      });
    }
    play();
  }

  function motion() {
    if (typeof gsap === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    if (boot && !reduce) {
      var frames = ["booting control plane.", "booting control plane..", "booting control plane...", "control plane online"];
      var i = 0;
      var timer = setInterval(function () {
        boot.textContent = frames[i];
        i += 1;
        if (i >= frames.length) {
          clearInterval(timer);
          boot.style.color = "#67f0b4";
        }
      }, 280);
    }

    if (!reduce) {
      gsap.from(".hero .reveal-text", { y: 90, duration: 1.1, stagger: 0.12, ease: "power4.out" });
      gsap.from(".hero .reveal-up", {
        y: 36,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.25
      });
      gsap.utils.toArray("main .reveal-up").forEach(function (el) {
        if (el.closest(".hero")) return;
        gsap.fromTo(el, { y: 40, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true }
        });
      });
    }

    addEventListener("scroll", function () {
      var max = document.documentElement.scrollHeight - innerHeight;
      progress.style.width = (max ? (scrollY / max) * 100 : 0) + "%";
    });

    if (cursor && !reduce) {
      addEventListener("mousemove", function (e) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      });
    }

    document.querySelectorAll("[data-magnetic]").forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var r = btn.getBoundingClientRect();
        btn.style.transform = "translate(" + (e.clientX - r.left - r.width / 2) * 0.25 + "px," + (e.clientY - r.top - r.height / 2) * 0.25 + "px)";
      });
      btn.addEventListener("mouseleave", function () {
        btn.style.transform = "translate(0,0)";
      });
    });

    document.querySelectorAll("[data-tilt]").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = "rotateY(" + (x * 8) + "deg) rotateX(" + (-y * 8) + "deg)";
      });
      card.addEventListener("mouseleave", function () {
        card.style.transform = "none";
      });
    });
  }

  function bannerReel() {
    var video = document.getElementById("banner-video");
    if (!video) return;
    var title = document.getElementById("cine-title");
    var sub = document.getElementById("cine-sub");
    var kicker = document.getElementById("cine-kicker");
    var dots = document.querySelectorAll("#cine-chapters li");
    var reel = [
      {
        src: "https://assets.mixkit.co/videos/47051/47051-720.mp4",
        kicker: "01 / Hardware",
        title: "GPU × CPU under load",
        sub: "Silicon first. Cores saturate. Then the model takes the rack."
      },
      {
        src: "https://assets.mixkit.co/videos/31590/31590-720.mp4",
        kicker: "02 / Intelligence",
        title: "AI replaces the idle rack",
        sub: "Networks light up. Agents move where tickets used to sit."
      },
      {
        src: "https://assets.mixkit.co/videos/20822/20822-720.mp4",
        kicker: "03 / Delivery",
        title: "Pipelines · MLOps",
        sub: "Build, test, gate, deploy, observe. The factory behind the model."
      }
    ];
    var i = 0;
    function show(index) {
      i = index % reel.length;
      var clip = reel[i];
      video.src = clip.src;
      video.play().catch(function () {});
      if (kicker) kicker.textContent = clip.kicker;
      if (title) title.textContent = clip.title;
      if (sub) sub.textContent = clip.sub;
      dots.forEach(function (dot, n) {
        dot.classList.toggle("is-on", n === i);
      });
    }
    video.addEventListener("ended", function () { show(i + 1); });
    show(0);
  }

  field();
  telemetry();
  pipeline();
  bannerReel();
  motion();
})();
