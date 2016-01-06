"use strict";

function addtwo(number1, number2) {
	var result;
	result = number1 + number2;
	return result;
}

var myNumber;
var yourNumber;
var ourNumber;
myNumber = 345;
yourNumber = 255;
ourNumber = addtwo(ourNumber, myNumber);
console.log(ourNumber);

var anotherNumber;
anotherNumber = addtwo(ourNumber, myNumber);
console.log(anotherNumber);