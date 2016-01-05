"use strict "

function CalcTotPayEmployee(hours, rate)  {
	var result;
	result = hours * rate
	return result;
	console.log(result)
}

var EmployeeAhours;
var EmployeeArate;
var EmployeeATotPay;
EmployeeAhours = 34;
EmployeeArate = 17 + 24/100;

EmployeeATotPay = CalcTotPayEmployee(EmployeeAhours, EmployeeArate);

console.log(EmployeeAhours);
console.log(EmployeeArate);
console.log(EmployeeATotPay);

var EmployeeBhours;
var EmployeeBrate;
var EmployeeBTotPay;
EmployeeBhours = 40;
EmployeeBrate = 23 + 43/100;

EmployeeBregularPay = CalcTotPayEmployee(EmployeeBhours, EmployeeBrate)


console.log(EmployeeBregularPay)



