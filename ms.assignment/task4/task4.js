function fractions(no) {
    let result = 1;
    for (let i = 1; i < no; i++) {
        result *= i;
    }
    return result;
}
console.log(fractions(2));
console.log(fractions(5));
console.log(fractions(7));
console.log(fractions(9));
export {};
