const childAge = document.querySelector(".child-age");
const parentAge = document.querySelector(".parent-age");
const calcular = document.querySelector(".calcular");
const you = document.querySelector(".you");
const parent = document.querySelector(".parent");
const year = document.querySelector(".ano-que-ocorreu");

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
const calc = (parentAgeVar, childAgeVar) => {
  parentAgeVar = Number(parentAge.value);
  childAgeVar = Number(childAge.value);
  if (Number(parentAgeVar) && Number(childAgeVar)) {
    const difAge = parentAgeVar - childAgeVar * 2;
    const pai = parentAgeVar + difAge;
    const filho = childAgeVar + difAge;
    const ano = anoAtual + difAge;
    you.innerHTML = `você: ${filho}`;
    parent.innerHTML = `seu pai: ${pai}`;
    year.innerHTML = `ano que ocorreu: ${ano}`;
    parentAge.value = "";
    childAge.value = "";
  } else {
    alert("Você deveria digitar um número!");
    parentAge.value = "";
    childAge.value = "";
  }
};
calcular.addEventListener("click", (e) => {
  e.preventDefault();
  calc(parentAge, childAge);
});
