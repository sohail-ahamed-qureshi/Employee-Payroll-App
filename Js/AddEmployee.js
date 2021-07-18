//salary indicators
var outputValue = document.querySelector("output-salary");
var salaryValue = document.getElementById("salary");
outputValue.textContent = salaryValue.value;
salaryValue.addEventListener("input", function(){
    outputValue.textContent =  salaryValue.value;
})