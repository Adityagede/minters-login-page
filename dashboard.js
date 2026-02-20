const themeBtn = document.getElementById("themeBtn");
const body = document.body;


themeBtn.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
    themeBtn.textContent = "☀ Light";
  } else {
    body.classList.replace("light", "dark");
    themeBtn.textContent = "🌙 Dark";
  }
});