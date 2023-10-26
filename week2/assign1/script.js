/* 스크롤에 따른 topBtn 투명도 */

const windowHeight = window.innerHeight;
const topBtn = document.getElementById("top-btn");

document.addEventListener("scroll", () => {
  topBtn.style.opacity = window.scrollY / windowHeight / 2;
});

/* 글자수에 따른 더보기 버튼 활성화 및 작동 */
const moreBtn = document.createElement("button"); //button 요소 생성
moreBtn.innerText = "more";
moreBtn.setAttribute("class", "content-more-btn"); //button 클래스명 지정

const contents = document.querySelectorAll(".content");
contents.forEach((content) => {
  if (content.children[1].innerText.length >= 85) {
    content.appendChild(moreBtn);
  }
});
