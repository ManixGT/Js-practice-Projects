const input = document.querySelector("#input");
const p = document.querySelector("p");
input.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  const regex = /[!@#$%^&*(),.?":{}|<>]/;
  const hasSpecialChar = regex.test(inputValue);
  const hasUpperCase = /[A-Z]/.test(inputValue);
  const hasNumber = /[0-9]/.test(inputValue);
  const isLongEnough = inputValue.length > 8;

  if (hasNumber && hasSpecialChar && hasUpperCase && isLongEnough) {
    p.style.color = "green";
    p.innerText = "Valid";
  } else if (inputValue.length === 0) {
    p.innerText = "";
  } else {
    p.style.color = "red";
    p.innerText = "Less Strength";
  }
});
