import { throttle } from "lodash";
const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const localState = JSON.parse(localStorage.getItem("feedback-form-state"));
  if(localState === null) {
    console.log("bidosya")
  } else {
    emailInput.value = localState.email;
    messageInput.value = localState.message
}
const state = {
    email: emailInput.value,
    message: messageInput.value
  };
  
  form.addEventListener("input", throttle(({target}) => {
    if(target.name === "email") {
        state.email = target.value;
        localStorage.setItem("feedback-form-state", JSON.stringify(state));
    } else if (target.name === "message") {
        state.message = target.value;
        localStorage.setItem("feedback-form-state", JSON.stringify(state));   
    }
  }, 500));

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const result = {
      email: emailInput.value,
      message: messageInput.value,
    };
    console.log(result);
    localStorage.removeItem("feedback-form-state");
    emailInput.value = '';
    messageInput.value = '';
    state.email = "";
    state.message = ""
  });