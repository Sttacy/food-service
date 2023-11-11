const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
let theme = Theme.LIGHT;

const body = document.querySelector("body");
const switchThemeButton = document.querySelector(".theme-switch__toggle");

const chosenTheme = localStorage.getItem("theme");
if (chosenTheme === Theme.DARK) {
  switchThemeButton.checked = true;
  onSwitchThemeButton();
}
switchThemeButton.addEventListener("change", onSwitchThemeButton);

function onSwitchThemeButton() {
  if (switchThemeButton.checked) {
    theme = Theme.DARK;
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  } else {
    theme = Theme.LIGHT;
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  }
  localStorage.setItem("theme", theme);
}
