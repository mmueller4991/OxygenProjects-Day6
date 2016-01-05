"use strict";

for (var harry=1; harry <= 100; harry++)
	{
    if (harry % 15 == 0)
        console.log("FizzBuzz");
    else if (harry % 3 == 0)
        console.log("Fizz");
    else if (harry % 5 == 0)
        console.log("Buzz");
    else
        console.log(harry);
}