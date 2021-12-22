// const liteMode = "Lite Mode";
// const eldarkMode = document.querySelector('.mode-type').textContent = liteMode;
// const elNewLogo = "Where is Your flag?";
// const elLogoLink = document.querySelector('.header-logo').textContent = elNewLogo;
// const elLogoLink = document.querySelector('.header-logo');
// const elNewChangedLogo = document.querySelector('.changelogo');

// elNewChangedLogo.addEventListener('click', function () {
//   elLogoLink.textContent = "Where is you flag?";
// });
const elDarkModeButton = document.querySelector('.switch-dark-light');

elDarkModeButton.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
})