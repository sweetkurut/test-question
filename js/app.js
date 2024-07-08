const CURRENT_YEAR = 2024;
const CORRECT_ANSWER = "Ответ правильный";
const ERROR_ANSWER = "Ответ неправильный";

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

btn.addEventListener("click", () => {
  const inputValue = input.value;

  if (!inputValue) {
    return;
  }

  const answer = Number(input.value);
  let result = CORRECT_ANSWER;

  if (answer !== CURRENT_YEAR) {
    result = ERROR_ANSWER;
  }

  output.innerHTML = result;
});
