import register from "./register";

export default async function onFormSubmit() {
  const pageBody = document.querySelector("body");
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const modalCloseBtn = document.querySelector(".modal-close-btn");

  modalCloseBtn.addEventListener("click", () => {
    modal.classList.remove("shown");
    overlay.classList.remove("shown");
  });
  const inputs = {
    name: document.forms["form"]["name"],
    email: document.forms["form"]["email"],
    phone: document.forms["form"]["phone"],
    message: document.forms["form"]["message"],
  };

  for (let key in inputs) {
    const inputGroup = inputs[key].closest(".input-with-label");
    const child = inputGroup.querySelector(".input-errorText")
      ? inputGroup.querySelector(".input-errorText")
      : null;
    if (child) {
      inputGroup.removeChild(child);
    }
    inputs[key].classList.remove("has-error");
  }

  const body = JSON.stringify({
    name: inputs.name.value,
    email: inputs.email.value,
    phone: inputs.phone.value,
    message: inputs.message.value,
  });
  const messageFromServer = await register(body);
  if (messageFromServer.status === "error") {
    for (let key in messageFromServer.fields) {
      inputs[key].classList.add("has-error");
      const inputGroup = inputs[key].closest(".input-with-label");
      const error = document.createElement("div");
      error.classList.add("input-errorText");
      error.textContent = messageFromServer.fields[key];
      inputGroup.appendChild(error);
    }
  }

  if (messageFromServer.status === "success") {
    modal.classList.add("shown");
    overlay.classList.add("shown");
    pageBody.classList.add("static");
    for (let key in inputs) {
      inputs[key].value = "";
    }
  }
  return false;
}
