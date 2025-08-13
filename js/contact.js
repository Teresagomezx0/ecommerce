console.log("[contact.js] file loaded");

// CONTACT VALIDATION
document.addEventListener("DOMContentLoaded", () => {
  console.log("[contact.js] DOMContentLoaded");
  const form = document.getElementById("form");
  if (!form) return;
  console.log("[contact.js] no contact form exists");

  const nameEl = document.getElementById("name");
  const emailEl = document.getElementById("email");
  const commentEl = document.getElementById("comment");
  const msg = document.getElementById("formMsg");
  console.log("[contact.js] inputs present?", { name, email, comment });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("[contact.js] submit fired");

    const name = nameEl.value.trim();
    const email = email.value.trim();
    const comment = commentEl.value.trim();

    if (!name) {
      msg.textContent = "Please Enter Your Name!";
      return;
    }
    if (!email) {
      msg.textContent = "Please Enter Your Email!";
      return;
    }
    if (!comment) {
      msg.textContent = "Please Enter Your Comment/Question";
      return;
    }

    msg.textContent = "Thanks! We will Reach Out Soon!";
    form.reset();

    // if (!name || !email || !comment) {
    //   alert("Please fill out all the fields.");
    //   return;
    // }
    // alert("Thanks! We'll Get in Contact Soon!");
    // form.reset();
  });
});
