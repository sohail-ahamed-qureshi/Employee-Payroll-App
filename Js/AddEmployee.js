//salary indicators
var outputValue = document.querySelector("output-salary");
var salaryValue = document.getElementById("salary");
outputValue.textContent = salaryValue.value;
salaryValue.addEventListener("input", function () {
  outputValue.textContent = salaryValue.value;
});

//Name validations
var errorName = document.querySelector("#errorname");
var submitButton = document.querySelector("#submitButton");
var fullName = document.querySelector("#fullName");
var nameRegex = RegExp("^[A-Z]{1}[a-zA-Z]{3,}$");
fullName.addEventListener("input", function () {
  if (nameRegex.test(fullName.value)) {
    errorName.textContent = "";
    submitButton.disabled = false;
  }
  if (!nameRegex.test(fullName.value)) {
    errorName.textContent =
      "**Invalid!!, Name must Start with Uppercase and have min 3 characters";
    submitButton.disabled = true;
  }
});

//Date Validations
var day = document.querySelector("#day");
var month = document.querySelector("#month");
var year = document.querySelector("#year");
var currentDate = new Date();

function setCurrentDates() {
  month.value = currentDate.getMonth();
  day.value = currentDate.getDate();
  year.value = currentDate.getFullYear();
}

function validateDate() {
  //validation for future dates
  if (
    year.value == currentDate.getFullYear() &&
    month.value <= currentDate.getMonth() &&
    day.value <= currentDate.getDate()
  ) {
    errorText.textContent = "";
  } else if (year.value < currentDate.getFullYear()) {
    errorText.textContent = "";
  } else if (year.value > currentDate.getFullYear()) {
    setCurrentDates();
  } else if (
    year.value == currentDate.getFullYear() &&
    month.value > currentDate.getMonth()
  ) {
    setCurrentDates();
  } else {
    setCurrentDates();
  }
}

year.addEventListener("change", validateDate);
month.addEventListener("change", validateDate);
day.addEventListener("change", validateDate);


//profile and gender validations
let filepath,genderValue;
var profileImage = document.getElementsByName('profile');
var gender = document.getElementsByName('gender');
for(let index =0; index < profileImage.length; index++){
  profileImage[index].addEventListener("click", function(){
    filepath=profileImage[index].value;
    if(profileImage[0].checked || profileImage[2].checked){
      gender[0].checked = true;
      genderValue = gender[0].value;
    }if(profileImage[1].checked || profileImage[3].checked){
      gender[1].checked = true;
      genderValue = gender[1].value;
    }
  });
}

//form submit
var submit = document.querySelector("#submitButton");
submit.addEventListener("click", function(){
alert(fullName.value +" "+ filepath +" "+ genderValue)
});