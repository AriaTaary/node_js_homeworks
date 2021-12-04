const colors = require('colors/safe');
const readline = require('readline-sync');


let firstNumber = Number(readline.question("Please, write first number: "));
let secondNumber;
let canStart = false;


if (isNaN(firstNumber)) {
    console.log(colors.red('It is not a number! Please, try again.'));
} else {
    secondNumber = Number(readline.question("Please, write second number: "));
    isNaN(secondNumber) ? console.log(colors.red('It is not a number! Please, try again.')) : canStart = true;
}

if (canStart) {
    let primeNumbersArray = [];
    let colorsArray = [colors.green, colors.yellow, colors.red];

    const isNumberPrime = (number) => {
        let flag = true;

        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                flag = false;
            }
        }

        return flag;
    };

    for (let number = firstNumber; number <= secondNumber; number++) {
        if (isNumberPrime(number)) {
            primeNumbersArray.push(number);
        }
    };

    if (primeNumbersArray.length) {
        for (let i = 0; i < primeNumbersArray.length; i++) {
            let colorNumber = colorsArray[i % 3];
            console.log(colorNumber(primeNumbersArray[i]));
        }
    } else {
        console.log(colors.red('There is no prime numbers! Please, try again.'));
    }
}