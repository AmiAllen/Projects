
const numbers = [1, 2, 3, 4, 5,6,7,8,9];

console.log("Using reduce method:");
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("Sum of numbers:", sum);