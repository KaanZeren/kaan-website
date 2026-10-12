const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });
});

sections.forEach((section) => {
  observer.observe(section);
});
const themeButton = document.querySelector("#theme-toggle");

themeButton.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "Licht";
  } else {
    themeButton.textContent = "Donker";
  }

});
