var loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Зупинка стандартної дії браузера (відправка форми)

  var emailInput = loginForm.elements.email;
  var passwordInput = loginForm.elements.password;

  var emailValue = emailInput.value.trim(); // Очистка від пробілів по краях
  var passwordValue = passwordInput.value.trim(); // Очистка від пробілів по краях

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
  } else {
    var formData = {
      email: emailValue,
      password: passwordValue
    };

    console.log(formData);

    // Очистка значень полів форми
    loginForm.reset();
  }
});

