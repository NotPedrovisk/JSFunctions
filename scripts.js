//////////#1
//one way to do it
function add7(number){
    let sum = number + 7
    return sum
}
console.log(add7(3));

//another way to do it, shorter
let add7Dif = (number) => number + 7;

console.log(add7Dif(2));

///////////#2
//one way to do it 
function mult(num1, num2){
    let product = num1 * num2
    return product
}
console.log(mult(2,4))

//another way to do it, shorter
let multDif = (num1, num2) => num1 * num2;
console.log(multDif(5,5))