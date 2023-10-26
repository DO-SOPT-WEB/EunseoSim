const windowHeight = window.innerHeight;
const topBtn = document.getElementById("top-btn");

document.addEventListener("scroll", () => {
  console.log(window.scrollY, windowHeight);
  topBtn.style.opacity = window.scrollY / windowHeight / 2;
});
