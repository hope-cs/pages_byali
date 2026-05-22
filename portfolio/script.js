/* ============================================================
   PAGES BY ALI — JAVASCRIPT
   Features:
   - Typing effect (Typed.js)
   - Particles background
   - Scroll reveal animations
   - Number counter animation
   - Navbar scroll effect
   - Mobile menu toggle
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {


  /* ══════════════════════════════════════════════
     1. TYPING EFFECT
     Add or remove strings to change what gets typed
     ══════════════════════════════════════════════ */
  if (document.getElementById("typed-text")) {
    new Typed("#typed-text", {
      strings: [
      "Salons and Parlours",
      "Boutiques and Tailors",
      "Gyms and Fitness Centers",
      "Academies and Schools",
      "Clinics and Hospitals",
    ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1800,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
  }


  /* ══════════════════════════════════════════════
     2. PARTICLES BACKGROUND
     Adjust count, speed, size below
     ══════════════════════════════════════════════ */
  if (typeof particlesJS !== "undefined" && document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: ["#3b82f6", "#8b5cf6", "#ec4899"] },
        shape: { type: "circle" },
        opacity: {
          value: 0.3,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.05, sync: false }
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: true, speed: 2, size_min: 0.5, sync: false }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#3b82f6",
          opacity: 0.1,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 0.4 } },
          push: { particles_nb: 3 }
        }
      },
      retina_detect: true
    });
  }


  /* ══════════════════════════════════════════════
     3. NAVBAR SCROLL EFFECT
     Adds dark background when user scrolls down
     ══════════════════════════════════════════════ */
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });


  /* ══════════════════════════════════════════════
     4. MOBILE MENU TOGGLE
     ══════════════════════════════════════════════ */
  const navToggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("open");
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".mobile-link").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
      });
    });
  }


  /* ══════════════════════════════════════════════
     5. SCROLL REVEAL ANIMATION
     Elements with class "reveal" animate in when
     they enter the viewport while scrolling
     ══════════════════════════════════════════════ */
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry, index) {
        if (entry.isIntersecting) {
          // Staggered delay for multiple elements
          setTimeout(function () {
            entry.target.classList.add("visible");
          }, index * 100);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
  );

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });


  /* ══════════════════════════════════════════════
     6. NUMBER COUNTER ANIMATION
     Counts up from 0 to the data-count value
     when the stats section enters the viewport
     ══════════════════════════════════════════════ */
  const counters = document.querySelectorAll(".h-stat-num[data-count]");

  const counterObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute("data-count"));
          const duration = 1500; // ms
          const step = Math.ceil(target / (duration / 16));
          let current = 0;

          const timer = setInterval(function () {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            entry.target.textContent = current;
          }, 16);

          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(function (counter) {
    counterObserver.observe(counter);
  });


  /* ══════════════════════════════════════════════
     7. SMOOTH SCROLL FOR NAV LINKS
     ══════════════════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });


  /* ══════════════════════════════════════════════
     8. ACTIVE NAV LINK HIGHLIGHT
     Highlights the nav link for the current section
     ══════════════════════════════════════════════ */
  const sections = document.querySelectorAll("section[id]");
  const navLinksList = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", function () {
    let current = "";
    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinksList.forEach(function (link) {
      link.style.color = "";
      if (link.getAttribute("href") === "#" + current) {
        link.style.color = "#60a5fa";
      }
    });
  });


});
