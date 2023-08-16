// step 1: add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // step 2: get email address inside the email input field
  // always remember to use .value to get text fro, an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  // step 3: get password inside the password input field
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  if (email === "destroyer@thot.com" && password === "thotbusta") {
    window.location.href = "bank.html";
  } else alert("maraKhaoGa");
});
