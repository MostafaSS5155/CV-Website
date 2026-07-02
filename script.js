// Trigger Progress Bars smoothly as soon as the sidebar entries are on screen
const observerOptions = {
  root: null,
  threshold: 0.1,
};

const skillObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll(".progress-bar-fill");
      progressBars.forEach((bar) => {
        const targetProgress = bar.getAttribute("data-progress");
        bar.style.width = targetProgress;
      });
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".skills-container").forEach((container) => {
  skillObserver.observe(container);
});

const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;

const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;

// Toggle Perspective Layout Coloring Engine (Clinical vs Developer)
function toggleTheme() {
  const body = document.body;
  const toggleIcon = document.getElementById("toggle-icon");

  if (body.getAttribute("data-theme") === "light") {
    body.setAttribute("data-theme", "dark");
    toggleIcon.innerHTML = sunIcon;
  } else {
    body.setAttribute("data-theme", "light");
    toggleIcon.innerHTML = moonIcon;
  }
}
