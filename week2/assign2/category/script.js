import { INCOME_CATEGORY } from "../data.js";
import { SPENDING_CATEGORY } from "../data.js";

let incomeCategoryData = []; //localStorage에 저장된 수입 카테고리 목록을 가져와 저장하는 배열
let spendingCategoryData = []; //localStorage에 저장된 지출 카테고리 목록을 가져와 저장하는 배열

window.onload = () => {
  //localStorage 초기화
  localStorage.getItem("income_category_data") === null &&
    localStorage.setItem(
      "income_category_data",
      JSON.stringify(INCOME_CATEGORY)
    );
  localStorage.getItem("spending_category_data") === null &&
    localStorage.setItem(
      "spending_category_data",
      JSON.stringify(SPENDING_CATEGORY)
    );

  //localStorage에 저장된 목록을 가져옴
  incomeCategoryData = JSON.parse(localStorage.getItem("income_category_data"));
  spendingCategoryData = JSON.parse(
    localStorage.getItem("spending_category_data")
  );

  renderCategoryList();
  handleAddIncome();
  handleAddSpending();
};

function renderCategoryList() {
  const IncomeCategoryWrapper = document.getElementById(
    "income-category-list-wrapper"
  );
  const SpendingCategoryWrapper = document.getElementById(
    "spending-category-list-wrapper"
  );

  IncomeCategoryWrapper.replaceChildren();
  incomeCategoryData.forEach((category) => {
    const li = document.createElement("li");
    li.innerText = category;
    IncomeCategoryWrapper.appendChild(li);
  });

  SpendingCategoryWrapper.replaceChildren();
  spendingCategoryData.forEach((category) => {
    const li = document.createElement("li");
    li.innerText = category;
    SpendingCategoryWrapper.appendChild(li);
  });
}

function handleAddIncome() {
  const incomeCategoryInput = document.getElementById("income-category-input");
  incomeCategoryInput.addEventListener("keyup", (e) => {
    if (incomeCategoryInput.value !== "" && e.key === "Enter") {
      e.target.blur();

      incomeCategoryData.push(incomeCategoryInput.value);
      localStorage.setItem(
        "income_category_data",
        JSON.stringify(incomeCategoryData)
      );
      renderCategoryList(incomeCategoryData);
      incomeCategoryInput.value = "";
    }
  });
}

function handleAddSpending() {
  const spendingCategoryInput = document.getElementById(
    "spending-category-input"
  );
  spendingCategoryInput.addEventListener("keyup", (e) => {
    if (spendingCategoryInput.value !== "" && e.key === "Enter") {
      e.target.blur();

      spendingCategoryData.push(spendingCategoryInput.value);
      localStorage.setItem(
        "spending_category_data",
        JSON.stringify(spendingCategoryData)
      );
      renderCategoryList(spendingCategoryData);
      spendingCategoryInput.value = "";
    }
  });
}
