"use strict";
var HoursEmployeeA;
var DollarsperHourEmployeeA;
var SalaryEmployeeA;
var OTHoursEmployeeB;
var HoursEmployeeB;
var HoursEmployeeBOT

HoursEmployeeA = 34;
DollarsperHourEmployeeA = 17 + 24/100;
SalaryEmployeeA = HoursEmployeeA * DollarsperHourEmployeeA;

var number2B;
var resultB;
HoursEmployeeB = 47;
number2B = 23 + 43/100;
resultB = HoursEmployeeB * number2B;

 if  (HoursEmployeeB > 40) {
        console.log('Your hours worked is above 40');
        OTHoursEmployeeB = HoursEmployeeB - 40;
        console.log("OTHoursEmployeeB= ", OTHoursEmployeeB);
    } else {
        console.log('No Overtime paid for this week');
    }

var number1BOT;
var number2BOT;
var resultBOT;
number1BOT = 7;
number2BOT = 23/2 + 43/100/2;
resultBOT = number1BOT * number2BOT;

var EmployeeBTotalSalary
EmployeeBTotalSalary = resultB + resultBOT

console.log("HoursEmployeeA= ", HoursEmployeeA);
console.log("DollarsperHourEmployeeA= ", DollarsperHourEmployeeA);
console.log("HoursEmployeeA*DollarsEmployeeA= ", SalaryEmployeeA);
console.log("HoursEmployeeB= ", HoursEmployeeB);
console.log("number2B= ", number2B);
console.log("HoursEmployeeB*number2B= ", resultB);
console.log("number1BOT= ", number1BOT);
console.log("number2BOT= ", number2BOT);
console.log("number1BOT*number2BOT= ", resultBOT);
console.log("EmployeeBTotalSalary=", EmployeeBTotalSalary)

