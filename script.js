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

// Toggle Perspective Layout Coloring Engine (Clinical vs Developer)
function toggleTheme() {
  const body = document.body;
  const toggleIcon = document.getElementById("toggle-icon");
  const toggleText = document.getElementById("toggle-text");
  const subtitle = document.getElementById("dynamic-subtitle");

  if (body.getAttribute("data-theme") === "light") {
    body.setAttribute("data-theme", "dark");
    toggleIcon.textContent = "🩺";
    toggleText.textContent = "Clinical Perspective";
    subtitle.textContent = "Front-End Dev // Medical Student";
  } else {
    body.setAttribute("data-theme", "light");
    toggleIcon.textContent = "💻";
    toggleText.textContent = "Dev Perspective";
    subtitle.textContent = "Medical Student & Developer";
  }
}
