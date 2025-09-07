// Smooth scrolling for navbar links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    // Close menu only on mobile (when hamburger is visible)
    if (window.innerWidth <= 768) {
      document.querySelector("header nav").classList.remove("active");
    }
  });
});

// Add a scroll effect for header (shrink & shadow)
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(27, 12, 7, 0.98)";
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
    header.style.padding = "8px 6%"; // shrink effect
  } else {
    header.style.background = "rgba(27, 12, 7, 0.95)";
    header.style.boxShadow = "none";
    header.style.padding = "12px 8%";
  }
});

// Toggle hamburger menu
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header nav");

if (toggle) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// Close nav when clicking outside (mobile only)
document.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    if (!e.target.closest("header")) {
      nav.classList.remove("active");
    }
  }
});
