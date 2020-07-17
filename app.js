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


const sectionOne = document.getElementById('section1');
console.log(sectionOne);
const sectionTwo = document.getElementById('section2')
console.log(sectionTwo);
const sectionThree = document.querySelector('#section3');
console.log(sectionThree);
const sectionFour = document.querySelector('#section4');
console.log(sectionFour);
const sectionFive = document.querySelector('#section5');
console.log(sectionFive);

sectionOne.textContent = 'Blazers';
sectionTwo.textContent = 'Lakers';
sectionThree.textContent = 'Celtics';
sectionFour.textContent = 'Clippers';
sectionFive.textContent = 'Atlanta';


const paraOne = document.querySelector('.paragraph1')
console.log(paraOne);
paraOne.textContent = 'Damian Lillard';
const paraTwo = document.querySelector('.paragraph2');
console.log(paraTwo);
paraTwo.textContent = 'Lebron James';
const paraThree = document.querySelector('.paragraph3');
console.log(paraThree);
paraThree.textContent = 'Kevin Garnett';
const paraFour = document.querySelector('.paragraph4');
console.log(paraFour);
paraFour.textContent = 'Kawhi Leonard';
const paraFive = document.querySelector('.paragraph5');
console.log(paraFive);
paraFive.textContent = 'Trae Young';