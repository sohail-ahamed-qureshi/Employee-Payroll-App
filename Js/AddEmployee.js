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

//Date Validations
var day = document.querySelector("#day");
var month = document.querySelector("#month");
var year = document.querySelector("#year");
var currentDate = new Date();

function validateDate(){
//validation for future dates
if(year.value == currentDate.getFullYear() && (month.value <= currentDate.getMonth()) && (day.value <= currentDate.getDate())){
  errorText.textContent = "";
  submitButton.disabled = false;
}
else if(year.value < currentDate.getFullYear()){
  //alert(day.value +" " + month.options[month.selectedIndex].textContent +" " +year.value);
  errorText.textContent = "";
  submitButton.disabled = false;
}
else if(year.value == 0 || month.value == 12 || day.value == 0){
  errorText.textContent = "Select Valid Dates"
  submitButton.disabled = true;
}
else if(year.value > currentDate.getFullYear()) {
  errorText.textContent ="Cannot select future dates";
  submitButton.disabled = true;
}else if(year.value == currentDate.getFullYear() && month.value > currentDate.getMonth())
{
  errorText.textContent ="Cannot select future dates";
  submitButton.disabled = true;
}
else{
  errorText.textContent = "Invalid Dates"
  submitButton.disabled = true;
}
}

year.addEventListener("change", validateDate);
month.addEventListener("change", validateDate);
day.addEventListener("change", validateDate);




