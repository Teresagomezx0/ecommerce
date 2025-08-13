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

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const nameVal = name.value.trim();
  const emailVal = email.value.trim();
  const commentVal = comment.value.trim();

  if (nameVal === "") {
    setError(name, "Please Enter Your Name");
  } else {
    setSuccess(username);
  }

  if (emailVal === "") {
    setError(email, "Please Enter a Valid Email!");
  } else if (!isValidEmail(emailVal)) {
    setError(email, "Please Enter a Valid Email!");
  } else {
    setSuccess(email);
  }

  if (commentVal === "") {
    setError(comment, "Please Enter your Comments or Questions!");
    // } else if (commentVal.length < 3 ) {
    //     setError(comment, 'Please Enter ')
  } else {
    setSuccess(password);
  }
};
