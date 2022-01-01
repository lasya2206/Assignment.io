//Factorial of a num input is 5. factorial of 5 -> 5 * 4 * 3 * 2 * 1 factorial of 7 -> 7 * 6 * 5 * 4 * 3 * 2 * 1 -> Take n from the user and alert the factorial of that num.
var num = parseInt(prompt('Enter a positive integer: '));
if (num < 0) {
    console.log('Negative number factorial does not exist');
}
else if (num == 0) {
    console.log(`The factorial of ${num} is 1.`);
}
else {
    var fact = 1;
    for (i = 1; i <= num; i++) {
        fact=fact*i;
    }
    console.log(fact);
}
