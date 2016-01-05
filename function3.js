"use strict "

function CalcPayEmployee(hours, rate)  {
	var result;
	result = hours * rate
	console.log(result)
}

function CalcTotPayEmployee(regular, overtime) {
	var total;
	total = regular + overtime
	console.log(total)
}

var EmployeeAhours;
var EmployeeArate;
EmployeeAhours = 34;
EmployeeArate = 17 + 24/100;

EmployeeATotPay = CalcPayEmployee(EmployeeAhours, EmployeeArate);

console.log(EmployeeAhours);
console.log(EmployeeArate);
console.log(EmployeeATotPay);

var EmployeeBhours;
var EmployeeBrate;
EmployeeBhours = 40;
EmployeeBrate = 23 + 43/100;

EmployeeBregularPay = CalcPayEmployee(EmployeeBhours, EmployeeBrate);

console.log("EmployeeBregularPay= " , EmployeeBregularPay);

var EmployeeBhours;
var EmployeeBrate;
EmployeeBhours = 7;
EmployeeBrate = 23 + 43/100 + 23/2 + 43/200;

EmployeeBovertimePay = CalcPayEmployee(EmployeeBhours, EmployeeBrate);

EmployeeBTotPay = CalcTotPayEmployee(EmployeeBregularPay, EmployeeBovertimePay)

console.log("EmployeeBovertimePay= " , EmployeeBovertimePay);
console.log("EmployeeBTotPay= " , EmployeeBTotPay);




