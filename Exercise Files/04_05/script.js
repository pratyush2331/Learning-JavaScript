// named function
function greater(a, b) {
    return (a>b) ? ["a: ", a] : ["b: " , b];
}

var a = 3/4;
var b = 5/7;

console.log(greater(a,b));
console.log(greater);

// anonymous function
var theBiggest = function(a, b) {
    return (a>b) ? ["a: ", a] : ["b: " , b];
}

console.log(theBiggest(a, b));
console.log(theBiggest);


// immediately invoked function
var anoFunction = (function(a, b) {
    return (a>b) ? ["a: ", a] : ["b: " , b];
})(a,b)

console.log(anoFunction);
