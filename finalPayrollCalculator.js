"use strict";
function getUserInput(message) {
    var userInput;
    userInput = window.prompt(message);
    return userInput;
}

function calcRegPay(rate, hours) {
	var RegTimePay;
	var workWeekHours;
	workWeekHours = 40;
	if (hours > workWeekHours) {
		RegTimePay = rate * workWeekHours;
	}else {
		RegTimePay = rate * hours;
	}
	return RegTimePay;
}

function calcOtPay (rate, hours) {
	var otPay;
	var otHours;
	var workWeekHours;
	var otRate;
	var otMultiple;
	otMultiple = 1.5
	otRate = rate * otMultiple
	workWeekHours = 40
	if (hours > workWeekHours) {
		otHours = hours - workWeekHours;
		otPay = otHours * otRate;
	}else { 
		otPay = 0;
	}
	return otPay;
}

function addtwo(number1, number2) {
	var result; 
	result = number1 + number2;
	return result;
}

function assembleMessage(userName, userHours, totalPay) {
	var message;
	message = userName + ", you worked " + userHours + " hours, for a total pay of $" + totalPay;
	return message;
}

function main() {
	var nameMessage;
    var hoursMessage;
    var rateMessage;
    var userName;
    var userHours;
    var userRate;
    var basePay;
    var otPay;
    var totalPay;
    var payMessage;
	while (userName != "stop") {
	nameMessage = "Please enter your name, enter \"stop\" to end the program";
    userName = getUserInput(nameMessage);
	if (userName === "stop") {
		continue
	}
    hoursMessage = "Please enter the hours you worked";
    userHours = getUserInput(hoursMessage);
    rateMessage = "How much do you make per hour";
    userRate = getUserInput(rateMessage);
    basePay = calcRegPay(userRate, userHours);
    otPay = calcOtPay(userRate, userHours);
    totalPay = addtwo(basePay, otPay);
    payMessage = assembleMessage(userName, userHours, totalPay);
	console.log(payMessage);
	}
}

main()