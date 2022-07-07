// Dark mod
let toggleBtn = document.querySelector(".toggle-btn");
let bodyElement = document.querySelector("body");
function setDarkTheme() {
  bodyElement.classList.toggle("dark");
}
toggleBtn.addEventListener("click", switchTheme);
function switchTheme() {
  let darkMode = localStorage.getItem("dark");
  if (darkMode !== "on") {
    setDarkTheme();
    darkMode = localStorage.setItem("dark", "on");
    toggleBtn.classList.toggle("fa-sun");
  } else {
    setDarkTheme();
    darkMode = localStorage.setItem("dark", "off");
    toggleBtn.classList.toggle("fa-sun");
  }
}
let darkMode = localStorage.getItem("dark");
if (darkMode === "on") {
  setDarkTheme();
  toggleBtn.classList.toggle("fa-sun");
}
// End the dark mod function