let incomeCategoryData = []; //localStorage에 저장된 수입 카테고리 목록을 가져와 저장하는 배열
let spendingCategoryData = []; //localStorage에 저장된 지출 카테고리 목록을 가져와 저장하는 배열

window.onload = () => {
  incomeCategoryData = JSON.parse(localStorage.getItem("income_category_data"));
  spendingCategoryData = JSON.parse(
    localStorage.getItem("spending_category_data")
  );

  renderCategoryList();
};

function renderCategoryList() {
  const IncomeCategoryWrapper = document.getElementById(
    "income-category-list-wrapper"
  );
  const SpendingCategoryWrapper = document.getElementById(
    "spending-category-list-wrapper"
  );

  incomeCategoryData.forEach((category) => {
    const li = document.createElement("li");
    li.innerText = category;
    IncomeCategoryWrapper.appendChild(li);
  });

  spendingCategoryData.forEach((category) => {
    const li = document.createElement("li");
    li.innerText = category;
    SpendingCategoryWrapper.appendChild(li);
  });
}

function handleAddIncome() {}

function handleAddSpending() {}
