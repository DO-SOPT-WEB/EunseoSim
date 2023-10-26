/* 스크롤에 따른 topBtn 투명도 */

const windowHeight = window.innerHeight;
const topBtn = document.getElementById("top-btn");

document.addEventListener("scroll", () => {
  topBtn.style.opacity = window.scrollY / windowHeight / 2;
});

/* 글자수에 따른 더보기 버튼 활성화 및 작동 */

const contents = document.querySelectorAll(".content");
contents.forEach((content) => {
  const contentDescription = content.children[1];
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

/* 미리보기 섹션 스크롤 버튼 */
const scrollLeftBtn = document.getElementById("scroll-left-btn");
const scrollRightBtn = document.getElementById("scroll-right-btn");

const onboardingScroll = document.getElementById("onboarding-scroll");
const maxScrollWidth = onboardingScroll.scrollWidth;

scrollLeftBtn.addEventListener("click", () => {
  onboardingScroll.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

scrollRightBtn.addEventListener("click", () => {
  onboardingScroll.scrollTo({
    top: 0,
    left: maxScrollWidth,
    behavior: "smooth",
  });
});
