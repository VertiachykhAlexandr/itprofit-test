import "normalize.css";
import "../styles/main.scss";

import intlTelInput from "intl-tel-input";
import onFormSubmit from "./validateForm";

const input = document.querySelector("#phone");
intlTelInput(input, {
  loadUtilsOnInit: () => import("intl-tel-input/utils"),
});
const body = document.querySelector("body");
const submitBtn = document.querySelector(".submit-btn");
const openModalBtn = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalCloseBtn = document.querySelector(".modal-close-btn");

submitBtn.addEventListener("click", onFormSubmit);
openModalBtn.addEventListener("click", () => {
  modal.classList.add("shown");
  overlay.classList.add("shown");
  body.classList.add("static");
});
modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("shown");
  overlay.classList.remove("shown");
  body.classList.remove("static");
});
