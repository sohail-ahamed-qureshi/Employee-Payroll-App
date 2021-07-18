//salary indicators
var outputValue = document.querySelector("output-salary");
var salaryValue = document.getElementById("salary");
outputValue.textContent = salaryValue.value;
salaryValue.addEventListener("input", function () {
  outputValue.textContent = salaryValue.value;
});

//Name validations
var errorText = document.querySelector("#errorText");
var submitButton = document.querySelector("#submitButton");
var fullName = document.querySelector("#fullName");
var nameRegex = RegExp("^[A-Z]{1}[a-zA-Z]{3,}$");
fullName.addEventListener("input", function () {
  if (nameRegex.test(fullName.value)) {
    errorText.textContent = "";
    submitButton.disabled = false;
   } 
   if (!nameRegex.test(fullName.value)) {
    errorText.textContent =
      "**Invalid!!, Name must Start with Uppercase and have min 3 characters";
    submitButton.disabled = true;
  }
  
});
