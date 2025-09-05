// Smooth scrolling for navbar links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Add a scroll effect for header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(27, 12, 7, 0.98)";
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
  } else {
    header.style.background = "rgba(27, 12, 7, 0.95)";
    header.style.boxShadow = "none";
  }
});
