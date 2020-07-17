//5 variables of different data types
//string
let name = "Levin";
console.log(name)
//Number
let myNumber = 27;
console.log(myNumber)
//Array 
const myArray = [1, 2, 3, 4];
console.log(myArray)
//boolean 
let myBool = true;
let myBoolTwo = false;
console.log(myBool)
console.log(myBoolTwo)
//object with 4 different key and pairs [string], [number], [array], [boolean]

const myObj = {
    Name: 'Levin',
    Male: true,
    favoriteSports:['Basketball', 'Football'],
    age: 24
}
console.log(myObj)

function result1(array) {
    return array;
}
console.log(myArray)
function result2(name) {
    return name;
}
console.log(name)
function result3(num1) {
    return num1;
}
console.log(myNumber)
function result4(bool) {
    return bool;
}
console.log(myBool)
function result5(obj) {
    return obj;
}
console.log(myObj)
function result6(greet, callback) {
    let sentence =  'Hello ' + greet;
    let otherSentence = callback();
    return sentence + otherSentence;
}
function result7() {
    let sentence = ', how are you?'
    return sentence;
}
console.log(result6('Levin', result7));
function result8() {
    
}
function result9() {

}
function result10() {

}