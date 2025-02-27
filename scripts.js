//////////#1
//one way to do it
function add7(number){
    let sum = number + 7
    return sum
}
console.log(add7(3));

//another way to do it, shorter
//arrow is used as a quick way to say return this expression result
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



////////#3
//one way to do it 
function capitalize(sentence){
    //didn't know, but you can stack expressions
    //gets the  first character(0), makes it upper case, slices the sentence at the second letter(1), makes that lower case
    //then add it all back
    let result = sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()
    return result
}
console.log(capitalize("sUsSY"))

//another way to do it, shorter
let capDif = (sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
console.log(capDif("heLLO i AM TrYing TO CODE right NoW."))


/////////#4
//one way to do it 
function lastLetter(txt){
    let length = txt.length;
    let result = txt.charAt(length-1)
    return result
}
console.log(lastLetter("i am amongus"))

//another way to do it, shorter
let lastLetterDif = (txt) => txt.charAt(txt.length - 1);
console.log(lastLetterDif("ASKDJHEHE"))

