
function addNumber() {
    let x = 5;
    let y = 7;
    const result = x + y;
    return result; 
}
const getSum = addNumber();
console.log(getSum)


const addNumber2 = function () {
    let x = 5;
    let y = 8;
    const result2 = x + y;
    return result2; 
}
const getSum2 = addNumber2();
console.log(getSum2)

const num = num => num; //return num =5
const result3 = num(5); 
console.log(result3)


const num = () => 7; // return 7
const result4 = num();
console.log(result4)

const doMath = (x, y) => {
    const number1 = x + y; 
    const number2 = x - y;
    const result = number1 * number2;
    return result;
}

const getMathResult = doMath(7, 5);
console.log(getMathResult)