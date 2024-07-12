// const variable
const PI = 3.141;
console.log("PI: " + PI);
// PI = 3; --> will give error


// var & let variable
function logScope() {
    var localVar = 2;
    if(localVar) {
        var localVar = "I'm different";
        console.log("nested localVar: " + localVar);
    }
    console.log("logScope localVar: " + localVar);
}
logScope();

function logScope1() {
    let localVar = 2;
    if(localVar) {
        let localVar = "I'm different";
        console.log("nested localVar: " + localVar);
    }
    console.log("logScope localVar: " + localVar);
}
logScope1();