import { INIT_BALANCE } from "./data.js";
import { LIST_DATA } from "./data.js";

let listData = []; //localStorage에 저장된 목록을 가져와 저장하는 배열
let balance = INIT_BALANCE; //나의 자산

window.onload = () => {
  //localStorage 초기화
  localStorage.getItem("list_data") === null &&
    localStorage.setItem("list_data", JSON.stringify(LIST_DATA));

  //localStorage에 저장된 목록을 가져옴
  listData = JSON.parse(localStorage.getItem("list_data"));
  renderList(listData);
};

function countBalance() {
  const balanceNode = document.getElementById("balance");
  balanceNode.innerText = balance.toLocaleString() + "원";
}

//list를 탐색하면서 요소를 하나씩 가계부 내역으로 렌더링하는 함수
function renderList(list) {
  const listWrapper = document.getElementById("list-wrapper"); //리스트가 들어갈 부모 노드
  const itemTemplate = document.getElementById("item-template"); //하나의 가계부 내역 아이템 템플릿

  list.forEach((item) => {
    balance += item.cost;

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
  countBalance();
}
