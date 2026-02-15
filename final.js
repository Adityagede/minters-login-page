// js dark light mode
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

const loginbtn = document.getElementById("btn-id")

const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email == "budi@gmail.com" && password == "1234"){
    alert ("Login Successful");
    window.location.href ="dashboard.html"
  } else {
    alert ("Invalid email or password");
  }
})