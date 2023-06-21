const outputYear = document.querySelector(".output.year");
const outputMonth = document.querySelector(".output.month");
const outputDay = document.querySelector(".output.day");
const submitBtn = document.querySelector(".submit-btn");
const inputYear = document.querySelector("#year");
const inputMonth = document.querySelector("#month");
const inputDay = document.querySelector("#day");

const errorYear = document.querySelector(".error-year");
const errorMonth = document.querySelector(".error-month");
const errorDay = document.querySelector(".error-day");

let isValid = false;
inputDay.addEventListener("input", (e) => {
  if (+inputDay.value > 31) {
    errorDay.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    errorDay.textContent = "";
  }
  if (+inputDay.value === 0) {
    isValid = false;
    errorDay.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    errorDay.textContent = "";
  }
});

inputMonth.addEventListener("input", (e) => {
  if (+inputMonth.value > 12) {
    errorMonth.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    errorMonth.textContent = "";
  }
  if (+inputMonth.value === 0) {
    isValid = false;
    errorMonth.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    errorDay.textContent = "";
  }
});

inputYear.addEventListener("input", (e) => {
  if (+inputYear.value > 2023 || +inputYear.value < 1920) {
    errorYear.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    errorYear.textContent = "";
  }
  if (+inputYear.value === 0) {
    isValid = false;
    errorYear.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    errorDay.textContent = "";
  }
});
