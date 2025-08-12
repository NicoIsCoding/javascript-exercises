let stringTwo = "hello"
let stringThree = "hi";
let stringBye = "bye"
let numba = 123
let empty = ""

let random = Math.floor(Math.random() * 1000)


const repeatString = function(string, num) {
    let newText;

    if (num === 0) {
        newText = "";
    } else if (typeof string !== "string") {
        return "does not use the built-in String repeat method"

    } else if (num < 0) {
        return "ERROR"

    } else {
        for (i = 1; i <= num; i++ ) {

    if (i === 1) {
        newText = string;
        
    } else {
        newText = newText + string;
        
    }
    
        
        
    }
}
    return newText;
};


repeatString(empty, random)


// Do not edit below this line
module.exports = repeatString;
