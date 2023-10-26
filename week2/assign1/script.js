/* 스크롤에 따른 topBtn 투명도 */

const windowHeight = window.innerHeight;
const topBtn = document.getElementById("top-btn");

document.addEventListener("scroll", () => {
  topBtn.style.opacity = window.scrollY / windowHeight / 2;
});

const contents = document.querySelectorAll(".content");
contents.forEach((content) => {
  const contentDescription = content.children[1];
  /* 글자수에 따른 더보기 버튼 활성화 및 작동 */
  if (contentDescription.innerText.length >= 85) {
    const moreBtn = document.createElement("button"); //button 요소 생성
    moreBtn.innerText = "more";
    moreBtn.setAttribute("class", "content-more-btn"); //button 클래스명 지정

    content.appendChild(moreBtn); //button 붙이기

    /* 클릭 이벤트시 버튼 사라짐 */
    content.addEventListener("click", () => {
      contentDescription.style.display = "block"; //말줄임 표시를 없앰
      moreBtn.style.display = "none";
    });
  }
});
