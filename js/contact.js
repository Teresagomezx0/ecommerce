const form = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const comment = document.getElementById("comment");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validate();
});

const setError = (element, message) => {
  const input = element.parentElement;
  const errorDisplay = input.querySelector(".error");

  errorDisplay.innerText = message;
  input.classList.add("error");
  input.classList.remove("success");
};

const setSuccess = (element) => {
  const input = element.parentElement;
  const errorDisplay = input.querySelector(".error");

  errorDisplay.innerText = message;
  input.classList.add("success");
  input.classList.remove("error");
};

const validate = () => {
  const nameVal = name.value.trim();
  const emailVal = email.value.trim();
  const comment = comment.value.trim();

  if (name === "") {
    setError(name, "Please Enter Your Name!");
  } else {
    setSuccess(name);
  }

  if (emailVal === "") {
    setError(email, "Please Enter a Valid Email");
  } else {
    setSuccess(email);
  }
};
