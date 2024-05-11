function isPalindromeNumber(number) {
    const originalNumber = number;
    let reversedNumber = 0;
    while (number > 0) {
        const digit = number % 10;
        reversedNumber = reversedNumber * 10 + digit;
        number = Math.floor(number / 10);
    }
    return originalNumber === reversedNumber;
}

const num1 = 12321;
const num2 = 12345;

console.log(num1, "is palindrome:", isPalindromeNumber(num1)); 
console.log(num2, "is palindrome:", isPalindromeNumber(num2));