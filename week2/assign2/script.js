import { INIT_BALANCE } from "./data.js";
import { LIST_DATA } from "./data.js";

let listData = []; //localStorage에 저장된 목록을 가져와 저장하는 배열

window.onload = () => {
  //localStorage 초기화
  localStorage.getItem("list_data") === null &&
    localStorage.setItem("list_data", JSON.stringify(LIST_DATA));

  //localStorage에 저장된 목록을 가져옴
  listData = JSON.parse(localStorage.getItem("list_data"));
  renderList(listData);
  countBalance(listData);
  handleFilterBtnClick(listData);
};

/* 계산된 나의 자산과 총 수입, 지출을 렌더링하는 함수 */
function countBalance(list) {
  let balance = INIT_BALANCE; //나의 총 자산
  let income = INIT_BALANCE; //총 수입
  let spending = INIT_BALANCE; //총 지출

  list.forEach((item) => {
    balance += item.cost;
    item.cost < 0 ? (spending += item.cost) : (income += item.cost);
  });

  const balanceNode = document.getElementById("balance");
  balanceNode.innerText = balance.toLocaleString() + "원";

  const incomeNode = document.getElementById("income-text");
  incomeNode.innerText = income.toLocaleString() + "원";

  const spendingNode = document.getElementById("spending-text");
  spendingNode.innerText = spending.toLocaleString() + "원";
}

/* list를 탐색하면서 요소를 하나씩 가계부 내역으로 렌더링하는 함수 */
function renderList(list) {
  const listWrapper = document.getElementById("list-wrapper"); //리스트가 들어갈 부모 노드
  const itemTemplate = document.getElementById("item-template"); //하나의 가계부 내역 아이템 템플릿

  listWrapper.replaceChildren();
  list.forEach((item) => {
    let itemContent = itemTemplate.cloneNode(true); //템플릿 복사
    let itemNewHtml = itemContent.innerHTML; //템플릿 안의 html 복사

    itemNewHtml = itemNewHtml
      .replace("{item-category}", item.category)
      .replace("{item-name}", item.name)
      .replace("{item-cost}", item.cost.toLocaleString())
      .replace("{item-type}", item.cost < 0 ? "spending" : "income");

    itemContent.innerHTML = itemNewHtml; //새롭게 바뀐 html을 템플릿에 적용
    listWrapper.appendChild(itemContent.content); //부모노드 안에 넣기
  });
}

/* 수입/지출 버튼 클릭을 통한 필터링을 동작시키는 함수 */
function handleFilterBtnClick(list) {
  const incomeBtn = document.getElementById("checkbox-income");
  const spendingBtn = document.getElementById("checkbox-spending");

  let filteredList = list;

  function handleFiltering() {
    if (incomeBtn.checked && !spendingBtn.checked) {
      filteredList = list.filter((item) => item.cost >= 0);
      renderList(filteredList);
    } else if (!incomeBtn.checked && spendingBtn.checked) {
      filteredList = list.filter((item) => item.cost < 0);
      renderList(filteredList);
    } else if (!incomeBtn.checked && !spendingBtn.checked) {
      renderList([]);
    } else {
      renderList(list);
    }
  }

  incomeBtn.addEventListener("click", handleFiltering);
  spendingBtn.addEventListener("click", handleFiltering);

  renderList(filteredList);
}
