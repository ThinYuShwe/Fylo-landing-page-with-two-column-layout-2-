const form1 = document.querySelector("#myForm1");
const form2 = document.querySelector("#myForm2");
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInput = form1.querySelector(".email");
  const errorMessage = form1.querySelector(".errorMessage");
  validateEmail(emailInput, errorMessage);
});
form2.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInput = form2.querySelector(".email");
  const errorMessage = form2.querySelector(".errorMessage");
  validateEmail(emailInput, errorMessage);
});
function validateEmail(emailInput, errorMessage) {
  const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (!pattern.test(emailInput.value)) {
    errorMessage.style.display = "block";
    emailInput.classList.add ("error-border");
  } else {
    errorMessage.style.display = "none";
  }
}
