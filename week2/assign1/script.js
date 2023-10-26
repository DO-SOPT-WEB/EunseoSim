const windowHeight = window.innerHeight;
const topBtn = document.getElementById("top-btn");

document.addEventListener("scroll", () => {
  topBtn.style.opacity = window.scrollY / windowHeight / 2;
});

// const moreBtn = document.createElement("button");
