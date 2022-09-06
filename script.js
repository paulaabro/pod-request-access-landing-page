function isEmailValid(email) {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const result = email.match(regex);
  return !!result;
}

function emailErrorMessages() {
  const email = input.value;
  if (email === "") {
    return "Oops! Please add your email";
  } else {
    return "Oops! Please check your email";
  }
}

function handleInput() {
  const email = input.value;
  if (isEmailValid(email)) {
    if (info.classList.contains("err")) {
      info.classList.remove("err");
    }
    input.value = "";
    info.classList.add("success");
    info.textContent = "Success! You're on the list!";
  } else {
    if (info.classList.contains("success")) {
      info.classList.remove("success");
    }
    info.classList.add("err");
    info.textContent = emailErrorMessages();
  }

  if (info.classList.contains("hidden")) {
    info.classList.remove("hidden");
  }
}

const input = document.querySelector("input");
const button = document.querySelector("button");
const info = document.querySelector(".info");

button.addEventListener("click", handleInput);