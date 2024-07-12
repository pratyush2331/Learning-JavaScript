function findBiggestFraction(a,b) {
    return (a>b) ? ["firstFraction", a] : ["secondFraction" , b];
}

var firstFraction = 3/4;
var secondFraction = 5/7;

var fractionResult = findBiggestFraction(firstFraction,secondFraction);
console.log(fractionResult);

console.log("First fraction result: ", firstFraction);
console.log("Second fraction result: ", secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest!");
