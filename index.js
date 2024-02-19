//Variables---->

// let firstName = "bro"; //strings
// let age = 21; //numbers
// let student = false; //boolean

// console.log("Hello", firstName);
// console.log("You are", age, "years old");
// console.log("Enrolled:",student);


// document.getElementById("p1").innerHTML = "Hello " + firstName;
// document.getElementById("p2").innerHTML = "You are " + age + "years old";
// document.getElementById("p3").innerHTML = " Enrolled: " + student; 


//Arithmetic Expression---->

// let students = 20;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 21;
// let extrastudents = students % 3;

// students += 1;

// console.log(students);

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & divisions
    4. addition & subtraction 

*/

// let result = 1 + 2 * (3 + 4);

// console.log(result);

//User Input ---->

//WINDOW PROMPT

// let username = window.prompt("what's your Name?");

// console.log(username);

//html Textbox

// let username;

// document.getElementById("myButton").onclick = function(){

//     username = document.getElementById("myText").value;
//     console.log(username);

//     document.getElementById("myLabel").innerHTML = " Mrs. " + username; 
// }


//Type Conversion---->

/*string, numbers, booleans*/

// let age = window.prompt("How old are you?");

// console.log(typeof age);
// age = Number(age);
// console.log(typeof age);
// age += 1;

// console.log("Happy BirthdaY ! You are", age, "years old");

// let x;
// let y;
// let z;
// x = Number("3.14");
// y = String(3.14);
// z = Boolean("");

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


//const - a variables that can't be changed---->

// const PI = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("Enter the raduis of a circle");
// radius = Number(radius);

// circumference = 2 * PI * radius;

// console.log("The circumference is:", circumference);

//MATH---->

// let x;
// let y = 5;
// let z = 9;
// let maximum;
// let minimum;

// // x = Math.round(x);
// // x = Math.floor(x);
// // x = Math.ceil(x);
// // x = Math.pow(x, 2);
// // x = Math.sqrt(x);
// // x = Math.abs(x);

// // maximum = Math.max(x, y, z);
// // minimum = Math.min(x, y, z);

// x = Math.PI;


// console.log(x);

/*
let a;
let b;
let c;

a = window.prompt("Enter side A");
a = Number(a); 

 b = window.prompt("Enter side B");
 b = Number(b);

 c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

 console.log("Side of C:", c);
 */

// document.getElementById("submitbtn").onclick = function(){


//     a = document.getElementById("aTextbox").value;
//     a = Number(a); 

//     b = document.getElementById("bTextbox").value;
//     b = Number(b);

//      c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

//      document.getElementById("clabel").innerHTML = "Side C: " + c;

// }


//Counter Program---->

// let count = 0;

// document.getElementById("decreaseBtn").onclick =  function () {

//     count -=1;
//     document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("resetBtn").onclick =  function () {

//     count =0;
//     document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("increaseBtn").onclick =  function () {

//     count +=1;
//     document.getElementById("countLabel").innerHTML = count;
// }

//Random Number---->

// let x;
// let y;
// let z;

// // console.log(x);
// // console.log(y);
// // console.log(z);


// document.getElementById("rollBtn").onclick = function(){


//    x = Math.floor(Math.random() * 10) + 1;
//    y = Math.floor(Math.random() * 30) + 1;
//    z = Math.floor(Math.random() * 50) + 1;

//    document.getElementById("xLabel").innerHTML = x;
//    document.getElementById("yLabel").innerHTML = y;
//    document.getElementById("zLabel").innerHTML = z;
// }

//Useful string properties & Methods---->

// let userName = "Kristine Tagum";
// let phoneNumber = "0996-456-9999";

// // console.log(userName.length);
// // console.log(userName.charAt(0));
// // console.log(userName.indexOf("o"));
// // console.log(userName.lastIndexOf("o"));
// // userName = userName.toUpperCase();
// // userName = userName.toLowerCase();

// phoneNumber = phoneNumber.replace("-", "-");
// userName = userName.charAt("12");

// console.log(phoneNumber);
// console.log( userName);

//slice() extracts a secion of string and returns
// it as a new string, without modifying the original 
// string

// let fullName = "Bro code";
// let firstName;
// let lastName;

// // firstName = fullName.slice(0, 2);
// // lastName = fullName.slice(4);

// lastName = fullName.indexOf("c");

// // console.log(firstName);
// console.log(lastName);


//Method Chaining---->

// let userName = "bro";

// let letter = userName.charAt(0).toUpperCase().trim();

// // letter = letter.toUpperCase();

// console.log(letter);

//If Statement---->

/*let age = 1;

if (age >= 65){

    console.log("You are a Senior!");

}

else if(age >= 18){

    console.log("You are an Adult!");    
}

else if(age < 0) {

    console.log("You haven't been born yet!");
}


else {
    console.log("You are a child!");
}*/

// let online = false;

// if (online){

//     console.log("You are online!");
// }

// else {

//     console.log("You are offline");
// }

//Check Property---->

/*document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if(myCheckBox.checked){

        console.log("You are Subscribed!");

    }

    else {

        console.log("You are not Subsribed!");
    }

    if(visaBtn.checked) {
        console.log("You are paying with a Visa Card!");

    }

    else if(mastercardBtn.checked) {
        console.log("You are paying with a MasterCard!");

    }

    else if(paypalBtn.checked) {
        console.log("You are paying with a Paypal Card!");

    }

    else {

        console.log("You must select a payment type!");
    }
}*/

//Switches---->

// let grade = "75";

// switch(true){

//     case grade >= 90:
//         console.log("You did great");
//         break;
//     case grade >= 80:
//         console.log("You did good!");
//         break;
//     case grade >= 75:
//         console.log("You passed.. barely!");
//         break;
//     case grade >= 70:
//         console.log("You FAILED!");
//         break;

//     default:
//         console.log(grade, "is not a letter grade!");
// }


//AND OR LOGICAL OPERATORS---->

// let temp = 15;
// let sunny = true;

// if(temp > 0 || temp < 30 && sunny){

//     console.log("The weather is good!");
// }
// else{

//     console.log("The weather is bad!");
// }

//! NOT LOGICAL OPERATOR

// let temp = 15;
// let sunny = true;

// if(!(temp > 0)){

//     console.log("it's cold outside");
// }
// else {

//     console.log("it's warm outside");
// }

// if(!sunny){

//     console.log("it's cloudy outside");
// }
// else {

//     console.log("it's sunny outside");
// }

//WHile loop

// let userName = "";

// while(userName == "" || userName == null){

//     userName = window.prompt("Enter your name");
// }

// console.log("Helllo", userName);


// do while loop

// let userName;

// do{

//     userName = window.prompt("Enter your name");
// }while(userName == "")

// console.log("Helllo", userName);

//For Loop

// for(let i = 100; i >= 0; i-=1){

//     console.log(i);
// }

// console.log("HAPPY BIRTHDAY SELF!");

//Break & Continue

// for( let i = 1; i<=20; i+=1){

//     if( i == 13){

//         continue;
//     }

//     console.log(i);
// }

//Nested Loops

// let symbol = window.prompt("Enter a symbol to use");
// let rows = window.prompt("Enter # of Rows");
// let columns = window.prompt("Enter # of Columns");

// for(let i = 1; i <= rows; i+=1){

//    for(let j = 1; j <= columns; j+=1){

//        document.getElementById("myRectangle").innerHTML += j;

//     }
//     document.getElementById("myRectangle").innerHTML += "<br>";
// }


//Function

// startProgram();

// function startProgram() {

//     let userName = "Kentin";
//     let age = 21;

//     happyBirthday(userName, age);
// }

// function happyBirthday(a, b){

//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday dear",a);
//     console.log("Happy Birthday to you!");
//     console.log("You are", b," years old!");


// }

//Return 

//  let area;
//  let width;
//  let height;

//  width = window.prompt("Enter width");
//  height = window.prompt("Enter height");

//  area = getarea(width,height);

//  console.log("The area is:",area);
 
//  function getarea(width,height){

//     let result = width * height;
//     return result;
//  }


//Ternary operator
//condition ? exprIfTrue : exprIfFalse

// let adult = checkAge(56);
// console.log(adult);

// function checkAge(age){

//     return age >= 18 ? true : false;
// }

// checkWinner(false);

// function checkWinner(win){

//     win ? console.log('YOU WIN!') : console.log('YOU LOSE!');
// }


//var vs let

// for(var i = 1; i <= 3; i+=1){

// }
// console.log(i);

// let name = "BRO";

//Template literals

//  let userName = "Bro";
//  let items = 4;
//  let total = 75;

//  console.log("Hello", userName);
//  console.log("You have", items, "items iin your cart");
//  console.log("Your total is $", total);

// console.log(`Hello ${userName}`);
// console.log(`Yo habe ${items} items in your cart`);
// console.log(`Your total is P${total}.00`);

// let text = 
// `Hello ${userName} <br>
// You have ${items} items in your cart <br>
// Your total is P${total}.00`;

// // console.log(text);

// document.getElementById("myLabel").innerHTML = text;

//eString{}
//toLocaleString
//number.toLocalestring(locale, {option});

// let myNum = 200;
// myNum = myNum.toLocaleString("en-US"); // US ENGLISH
// myNum = myNum.toLocaleString("hi-IN"); // HINDI
// myNum = myNum.toLocaleString("de-DE"); // Standard Germany

// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"}); // US ENGLISH
// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"}); // HINDI
// myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"}); // Standard Germany

// myNum = myNum.toLocaleString(undefined, {style: "percent"});

// myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "ounce"});

// console.log(myNum);

//Guessing game Javascript

// let answer = Math.floor(Math.random() * 20 +1);
// let guesses = 0;

// document.getElementById("submitButton").onclick = function(){

//     let guess = document.getElementById("guessField").value
//     guesses=+1;

//     if(guess == answer){
//         alert(`${answer} is the #. it took you ${guesses} guesses`);
//     }
//     else if(guess < answer){

//         alert("Too small");
//     }
//     else {

//         alert("Too large");
//     }
// }

//Convert Temperature program 

// document.getElementById("submitButton").onclick = function(){

//     let temp;

//     if(document.getElementById("cButton").checked){
//         temp = document.getElementById("textbox").value;
//         temp = Number(temp);
//         temp = toCelsius(temp);
//         document.getElementById("tempLabel").innerHTML = temp + "°C";
//     }
//     else if(document.getElementById("fButton").checked){

//         temp = document.getElementById("textbox").value;
//         temp = Number(temp);
//         temp = toFahrenheit(temp);
//         document.getElementById("tempLabel").innerHTML = temp + "°F";
        
//     }

//     else {

//         document.getElementById("tempLabel").innerHTML = "Select a unit";
//     }

// }


// function toCelsius(temp){
//     return (temp - 32) * (5/9);

// }

// function toFahrenheit(temp){
//     return temp * 9 / 5 + 32;
// } 

//ARRAYS

// let fruits = ["apple", "orange", "banana", "pineapple"];

// fruits.push("lemon"); // add an element
// fruits.pop(); // removes last element 
// fruits.unshift("mango"); // add element to beginning
// fruits.shift(); // remove element to beginning

// let length = fruits.length;
// let index = fruits.indexOf("banana");

// console.log(index);

// let prices = [5, 10, 15, 20];

// // for(let i = prices.length - 1; i >= 0; i -=1 ){

// //     console.log(prices[i]);
// // }

// for( let price  of prices){

//     console.log(price);
// }

//string in javasxript

// let fruits = ["banana", "apple","orange", "mango"];

// for(let fruit of fruits ){

// console.log(fruit);

// }

//2D arrays = AN ARRAY OF ARRAYS
//nested array

// let fruits = ["banana", "apple","orange"];
// let vegetables = ["carrots", "onions","potatoes"];
// let meats = ["beef", "chicken", "pork"];

// let grocerylist = [fruits, vegetables, meats];

// grocerylist [2][1] = "kiwi";

// for(let list of grocerylist){
//     for(let food of list){

//         console.log(food);

//     }
// }

//spread operator 

// let = numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let userName = "Bro Code";

// let maximum = Math.max(...numbers);
// console.log(maximum);

// let class1 = ["Spongebob", "Patrick", "Sandy"];
// let class2 = ["Squidward", "Mr.Krab", "Plankton"];

// class1.push(...class2);

// console.log(...class1);

//Rest parameters 

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// console.log(sum(a,b,c,d,e));

// function sum(...numbers){
//     let total = 0;
//     for( let number of numbers){
//         total += number
//     }
//     return total;
// }

//Callbacks

// let total = sum(2, 3);
// displayDOM(total);

// function sum(x, y){
//     let result = x + y;
//     return result
// }


// sum(2, 3, displayDOM);

// function sum(x, y, callback){
// let result = x + y;
// callback(result);

// }


// function displayConsole(output){
//     console.log(output);
// }

// function displayDOM(output){
    
//     document.getElementById("myLabel").innerHTML = output;
// }

//array.forEach()

// let students = ["spongebob", "patrick", "sandy"];
// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element, index, array){

//     array[index] = element[0].toUpperCase() + element.substring(1);

// }   

// function print(element){

//     console.log(element);
// }

//array.map()
// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(square);
// let cubes = numbers.map(cube);

// cubes.forEach(print);

// function square(element){

//     return Math.pow(element, 2);
// }
// function cube(element){

//     return Math.pow(element, 3);
// }

// function print(element){

//     console.log(element);
// }

//array.filter

// let ages = [18, 16, 21, 17, 19, 90];
// let adults = ages.filter(checkAge);

// adults.forEach(print);

// function checkAge(element){

//     return element >= 18;
// }

// function print(element){
//     console.log(element);

// }

//array.reduce

// let prices = [5, 10, 15, 20,1000];
// let total = prices.reduce(checkOut);

// console.log(`The total is: $${total}`);

// function checkOut(total, element){

//     return total + element;
// }
 

// sort the numbers

// let grades = [100, 75, 80, 70, 90, 99, 74];

// grades = grades.sort(ascendingSort);

// grades.forEach(print);

// function descendingSort(x, y){

//     return y - x;
// }

// function ascendingSort(x, y){

//     return x - y;
// }

// function print(element){
//     console.log(element);

// }

//Function Expression

// const greeting = function(){

//     console.log("Hello!");
// }

// greeting();

// let count = 0;

// document.getElementById("decreaseBtn").onclick = function(){

//     count-=1;
//     document.getElementById("myLabel").innerHTML = count;
// }

// document.getElementById("increaseBtn").onclick = function(){

//     count+=1;
//     document.getElementById("myLabel").innerHTML = count;
// }

// document.getElementById("reloadBtn").onclick = function(){

//     count=0;
//     document.getElementById("myLabel").innerHTML = count;
// }

// function increaseCount(){
//     count+=1;
//     document.getElementById("myLabel").innerHTML = count;
    
// }

// function decreaseCount(){
//     count+=1;
//     document.getElementById("myLabel").innerHTML = count;
    
// }

//Arrow function---->

// const greeting = (userName) => console.log(`Hello ${userName}`);

// greeting("Bro");

// const percent = (x, y) => x / y * 100; 

// console.log(`${percent(11, 20)}%`);

// let grades = [100, 80, 75, 90, 70, 95];

// grades.sort((x, y) => y - x);
// grades.forEach((element) => console.log(element));

//Array of Shuffle Card---->

// let cards = ["A", "2", "3", "4", "5", "6" ,"7", "8", "9", "10", "J", "Q", "K"];

// shuffle(cards);

// // console.log(cards[0]);
// cards.forEach(card => console.log(card));

// document.getElementById("reShuffle").onclick = function (){
//     document.getElementById("myLabel").innerHTML = cards;
// }

// function shuffle(array){
//     let currentIndex = array.length;

//     while(currentIndex != 0){
//         let randomIndex = Math.floor(Math.random() * array.length);
//         currentIndex-=1;

//         let temp = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temp;
//     }

//     return array;

// }

//nested functions--->

// let userName = "KenTin";
// let userInbox = 34;

// login();

// function login(){

//     displayUserName();
//     displayUserInbox();

//     function displayUserName(){

//         console.log(`Welcome ${userName}!`);
//     }

//     function displayUserInbox(){

//         console.log(`You have  ${userInbox} new messages `);
        
//     }
    
    
// }

// const store = new Map([

//     ["t-shirt", 20],
//     ["short", 35],
//     ["Jacket", 60],
//     ["Cap", 25]
// ]);


// let shoppingCart = 0;

// shoppingCart += store.get("t-shirt");
// shoppingCart += store.get("Jacket");

// console.log(shoppingCart);

// store.set("hat", 16);
// store.set("socks", 26);
// // store.delete("short", 35);
// // console.log(store.has("hat"));
// console.log(store.size);

// store.forEach((value, key) => console.log(`${key} $${value}`));

//Object--->

// const car = {
//     model: "Mustang",
//     color: "red",
//     year: 2023,

//     drive : function(){

//         console.log("You drive a car!");
//     },

//     brake : function(){

//         console.log("You step on the brakes.");
//     }

// }

// console.log(car.model);
// console.log(car.color);
// console.log(car.year);
// car.drive();
// car.brake();

//this object--->

// const car1 = {
//     model: "Mustang",
//     color: "red",
//     year: 2023,

//     drive : function(){

//         console.log("You drive a car!");
//     },

//     brake : function(){

//         console.log("You step on the brakes.");
//     }

// }

// const car2= {
//     model: "Toyota",
//     color: "yellow",
//     year: 2024,

//     drive : function(){

//         console.log(`You drive a ${this.model}.`);
//     },

//     brake : function(){

//         console.log(`You step on the brakes of ${this.model} the color is ${this.color}`);
//     }

// }

// car2.drive();
// car2.brake();

// this.name = "kentin";

// console.log(this.name);

//Classes--->

// class Player {

//     score = 0;

//     pause(){

//         console.log("You paused the game.");
//     }
//     exit(){

//         console.log("You exited the game.");
//     }
// }

// const player1 = new Player();
// const player2 = new Player();
// const player3 = new Player();
// const player4 = new Player();
// player1.score += 1

// console.log(player1.score);
// console.log(player2.score);

// player1.pause();
// player1. exit();


//Classes Constructor--->

// class student{

//     constructor(name, age, gpa){
//         this.name = name;
//         this.age = age;
//         this.gpa = gpa;

//     }

//     status(){

//         console.log(`${this.name} is Passed.`);
//     }
// }

// const student1 = new student("Ken", 27, 1.5);
// const student2 = new student("Isabelle", 32, 1.2);

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);
// student1.status();

// console.log(student2.name);
// console.log(student2.age);
// console.log(student2.gpa);
// student2.status();
  
  //Static--->


//   class Car{

//         static numberOfCars = 0;
//         constructor(model){

//             this.model = model;
//             Car.numberOfCars += 1;
//         }

//        static startRace(){

//             console.log("3....4....1.....G0!!!")
//         }
//   }


//   const car1 = new Car("Mustang");
//   const car2 = new Car("Toyota");
//   const car3 = new Car("Suzuki");
//   const car4= new Car("Ferrari");
//   const car5 = new Car("Honda");

//   console.log(Car.numberOfCars);

// //   Car.startRace();

//Inheritance ---->

// class Animal{

//     alive = true;

//     eat(){

//         console.log(`This ${this.name} is eating.`)
//     }

//     sleep(){

//         console.log(`This ${this.name} is sleeping.`)
//     }
// }


// class Dog extends Animal {

//     name = "dog";

//     run(){

//         console.log(`This ${this.name} is running.`);
//     }
// }


// class Bird extends Animal {

//     name = "bird";

//     fly(){

//         console.log(`This ${this.name} is Flying.`);
//     }
// }

// class Dolfin extends Animal {

//     name = "dolfin";

//     swim(){

//         console.log(`This ${this.name} is Swimming.`);
//     }
// }

// const dog = new Dog();
// const bird = new Bird();
// const dolfin = new Dolfin();

// console.log(dolfin.alive);
// dolfin.eat();
// dolfin.sleep();
// dolfin.swim();

//super keyword  --->

// class Animal {

//     constructor(name, age){

//         this.name = name;
//         this.age = age;
//     }

// }

// class Dog extends Animal{

//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }
// }

// class Fish extends Animal{

//     constructor(name, age, swimSpeed){
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }
// }

// class Hawk extends Animal{

//     constructor(name, age, flySpeed){
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }
// }

// const dog = new Dog("dog", 1, 40);
// const fish = new Fish("fish", 1, 80);
// const hawk = new Hawk("hawk", 1, 400);


// console.log(hawk.name);
// console.log(hawk.age);
// console.log(hawk.flySpeed);

// console.log(fish.name);
// console.log(fish.age);
// console.log(fish.swimSpeed);

//Get keyword  --->


// class Car{

//     constructor(power){
//         this._gas = 5;
//         this._power = power;
//     }
//     get power(){

//         return `${this._power}hp`;
//     }
//     get gas(){

//         return `${this._gas}L (${this._gas / 50 * 100}%)`;
//     }
//     set gas(value){
//         if(value > 50){

//             value = 50;
//         }
//         else if(value < 0){
//             value = 0;

//         }
//         this._gas = value;

//     }

// }

// let car = new Car(400);

// car.gas = -100000000;

// console.log(car.power); 
// console.log(car.gas);

//Pass the object to argument --->

// class Student {

//     constructor(name, age, gpa){

//         this.name = name;
//         this.age = age;
//         this.gpa = gpa;

//     }
// }

// const student1 = new Student("Ken", 24, 1.5);
// const student2 = new Student("Marie", 19, 2.5);
// const student3 = new Student("Lee", 24, 3.0);
// const student4 = new Student("Isa", 24, 1.2);

// changeGpa(student2, 1.4);
// changeAge(student2, 20);
// displayInfo(student2);


// function displayInfo(student){

//     console.log(student.name);
//     console.log(student.age);
//     console.log(student.gpa);
// }

// function changeGpa(student, gpa){

//     student.gpa = gpa;
// }

// function changeAge(student, age){

//     student.age = age;
// }

//array in object


// class Car{

//     constructor(model, year, color){

//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }

//     drive(){

//         console.log(`You drive the ${this.model}.`);
//     }

// }

// const car1 = new Car("Mustang", 2023, "red");
// const car2 = new Car("Lambo", 2024, "yellow");
// const car3= new Car("Toyota", 2022, "blue");
// const car4 = new Car("BMW", 2024, "black");

// const cars = [car1, car2, car3, car4];

// console.log(cars[0].color);
// console.log(cars[1].color);
// console.log(cars[2].color);
// console.log(cars[3].color);

// cars[0].drive();
// cars[1].drive();
// cars[2].drive();
// cars[3].drive();

// startRace(cars);

// function startRace(cars){

//     for(const car of cars){

//         car.drive();
//     }
// }

//anonymous object 

// class Card{

//     constructor(value, suit){

//         this.value = value;
//         this.suit = suit;
//     }
// }


// let cards = [new Card("A", "Hearts"),
//              new Card("A", "Spades")];

// cards.forEach(card => console.log(`${card.value} ${card.suit}`));

//error

// try{

//     let x = window.prompt("Enter a #");
//     x = Number(x);

//     if(isNaN(x)) throw "That wasn't a number";
//     if(x == "") throw "That was empty!";

//     console.log(`${x} is a number`);
// }

// catch(error){

//     console.log(error);
// }


// finally{

//     console.log("This always eecutes");
// }

//setTimeout()

// let item = "cryptocurrency";
// let price = 420.59;


// let time1 = setTimeout(firstMessage, 1000, item, price);
// let time2 = setTimeout(secondMessage, 2000);
// let time3 = setTimeout(thirdMessage, 3000);

// function firstMessage(item, price){

//     alert(`Buy this ${item} for ${price}`);
// }

// function secondMessage(){

//     alert('This is You!');
// }

// function thirdMessage(){

//     alert('This is Us!');
// }

// document.getElementById("myButton").onclick = function(){

//     clearTimeout(time1);
//     clearTimeout(time2);
//     clearTimeout(time3);
//     alert(`Thank you for Checking out!`);
// }

//set interval---->

// let count = 0;
// let max = window.prompt("Count up to what #?");
// max = Number(max);

// const myTimer = setInterval(countUp, 1000, max);

// function countUp(){

//     count+=1;
//     console.log(count);
//     if(count >= max){
//         clearInterval(myTimer);
//     }
// }

//date object---->
let date = new Date();
// let date = new Date(0);
// let date = new Date();

// let date = new Date("November 10, 3024 00:00:00");

// let year = date.getFullYear();
// let day0fMonth = date.getDate();
// let day0fWeek = date.getDay();
// let month = date.getMonth();
// let hours = date.getHours();
// let minutes = date.getMinutes();
// let millisecond = date.getMilliseconds();

// date.setFullYear(2025);
// date.setDate(10);
// date.setMonth(10);
// date.setHours(5);

// date = date.toLocaleString();
// document.getElementById("myLabel").innerHTML = formatTime(date);

// function formalDate(date){

//     let year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     let day = date.getDate();

//     return `${month}/${day}/${year}`
// }

// function formatTime(date){

//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let AmorPm = hours >= 12 ? "pm" : "am";

//     hours = (hours % 12) || 12;

//     return `${hours}:${minutes}:${seconds} ${AmorPm}`
// }


// const myLabel = document.getElementById("myLabel");

// update();

// function update(){

//     let date = new Date();
//     myLabel.innerHTML = formatTime(date);

//     function formatTime(date){

//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let seconds = date.getSeconds();
//         let am0rPm = hours >= 12 ? "pm" : "am";
    
//         hours = (hours % 12) || 12;

//         // hours = formalZero(hours);
//         // hours = formalZero(minutes);
//         // hours = formalZero(seconds);

//         return `${hours}:${minutes}:${seconds} ${am0rPm}`;
//     }

//     function formalZero(date){
//         time = time.toString();
//         return time.length < 2 ? "0" + time : time;

//     }
// }


//synchronous code & asynchronous code

// console.log("Start");
// setTimeout(() => console.log("This is asynchronous"), 2000);
// console.log("End");

//console.time()

// console.time("Response time");

// // alert("Click ME!");
// setTimeout(() => console.log("HELLO!"), 3000);

// console.timeEnd("Response time");

//Promise

// const promise = new Promise((resolve, reject) => {

//     let fileloaded = true;

//     if(fileloaded){

//         resolve("File loaded");
//     }
//     else{
//         reject("File NOT loaded");
//     }

// });

// promise.then(value => console.log(value))
//     .catch(error => console.log(error));

// const wait = time => new Promise(resolve => {

//     setTimeout(resolve, time);
// });

// wait(3000).then(() => console.log("Thank you for Waiting me!"));

//Async

// async function loadFile(){

//     let fileloaded = false;

//     if(fileloaded){

//         return "File loaded";
//     }
//     else{
//         throw "File NOT loaded";
//     }

// }

// loadFile().then(value => console.log(value))
//     .catch(error => console.log(error));

//await

// async function loadFile(){

//     let fileloaded = true;

//     if(fileloaded){

//         return "File loaded";
//     }
//     else{
//         throw "File NOT loaded";
//     }

// }

// async function startProcess(){

//     try{

//         let message = await loadFile();
//         console.log(message);
//     }
//     catch(error){

//         console.log(error);

//     }
// }

// startProcess();

//ES6 Module


// import {PI, getCircumference, getArea}  from "./math_ul.js"

// import * as MathUtil from "./math_ul.js"

// console.log(MathUtil.PI);

// let circumference = MathUtil.getCircumference(10);
// console.log(circumference);

// let area = MathUtil.getArea(10);
// console.log(area);

//DOM - Document Object Module (API)


// console.dir(document);

// console.log(document.title);
// console.log(document.URL);
// document.location = "https://www.youtube.com/";

// document.body.style.backgroundColor = "skyblue";
// document.getElementById("myDiv").innerHTML = "Hello World";


//Element Selector

// let element = document.getElementById("myTitle");
// element.style.backgroundColor = "lightgreen";

// let fruits = document.getElementsByName("fruits");

// fruits.forEach(fruits => {

//     if(fruits.checked){

//         console.log(fruits.value);
//     }
// })

// let vege = document.getElementsByTagName("li");
// vege[4].style.backgroundColor = "lightgreen";

// let deserts = document.getElementsByClassName("desserts");
// deserts[0].style.backgroundColor = "lightblue";

// let element = document.querySelector("[for]");
// element.style.backgroundColor = "blue";

// let elements = document.querySelectorAll(".desserts");
// elements.forEach(element => {

//     element.style.backgroundColor = "blue";
// })

//DOM traversal

//.firstElementChild
//.lastElementChild
//.parentElement
//.nextElementSibling
//.previousElementSibling
//.children[]
//array.from(.childern)

// let element = document.querySelector("#fruits");
// let children = Array.from(element.children);


// children.forEach(child => child.style.backgroundColor = "lightgreen");

//Add/change Text HTML Element

//.innerHTML
//.Textconnent

// const nametag = document.createElement("h1");

// nametag.textContent = window.prompt("Enter Your Lucky Name:");
// document.body.append(nametag);

// const myList = document.querySelector("#fruits");
// const listItem = document.createElement("li");
// listItem.textContent = "grapes";
// // myList.prepend(listItem);

// myList.insertBefore(listItem,myList.getElementsByTagName("li")[3])

//Add/change CSS Properties

// const title = document.getElementById("myTitle");

// title.style.backgroundColor = "#f9f9f9";
// title.style.fontSize = "100px";
// title.style.color = "skyblue"
// title.style.textDecoration = "underline";

//Events

// const element = document.getElementById("myButton");
// const element = document.body;
// const element = document.getElementById("myText");
// const element = document.getElementById("myDiv");

// element.onclick = doSomething;
// element.onload = doSomething;
// element.onchange = doSomething;
// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;
// element.onmousedown = doSomething;
// element.onmouseup =doSomethingElse;

// function doSomething() {

//     document.getElementById("myButton").innerHTML = "Hello Text";
//     alert("Hello");
//     element.style.backgroundColor = "#3283a8";

// }

// function doSomethingElse() {

//     element.style.backgroundColor = "#454545";

// }

//.addEventListener

// const innerDiv = document.getElementById("innerDiv");
// const outerDiv = document.getElementById("outerDiv");

// innerDiv.addEventListener("click", changeBlue);
// outerDiv.addEventListener("click", changeBlue);

// function changeBlue(){

//     alert(`You selected ${this.id}`);
//     this.style.backgroundColor = "lightblue";
// }

// innerDiv.addEventListener("mouseover", changeGreen);
// innerDiv.addEventListener("mouseout", changeRed);

// function changeGreen(){

//     innerDiv.style.backgroundColor = "#32a844";
// }

// function changeRed(){

//     innerDiv.style.backgroundColor = "#a83232";
// }

//show/hide HTML

// const myButton = document.querySelector("#myButton");
// const myImage = document.querySelector("#myImage");

// myButton.addEventListener("click", () => {

//     if(myImage.style.display == "none"){

//         myImage.style.display = "block";
//         document.getElementById("myButton").innerHTML = "hide";
//     }
//     else{

//         myImage.style.display = "none";
//         document.getElementById("myButton").innerHTML = "show";
//     }
// })
 
//detect key presses

// const myDiv = document.getElementById("myDiv2")
// // window.addEventListener("keydown", event => console.log(event.key));
// window.addEventListener("keydown", moving);

// let x = 0;
// let y = 0;
// function moving(event){

//     switch(event.key){
        
//         case "ArrowDown":

//         y+=5;
//         myDiv.style.top = y + "px";
//         break;

//         case "ArrowUp":

//         y-=5;
//         myDiv.style.top = y + "px";
//         break;

//         case "ArrowRight":

//         x+=5;
//         myDiv.style.left = x + "px";
//         break;

//         case "ArrowLeft":

//         x-=5;
//         myDiv.style.left = x + "px";
//         break;
//         default:
//         break;
//     }
// }

//Animation

// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");


// myButton.addEventListener("click", begin);

// function begin (){

//     let timerId = null;
//     // let degrees = 0;
//     // x = 0;
//     // y = 0;
//     let scaleX = 1;
//     let scaleY = 1;

//     timerId = setInterval(frame, 5);

//     // function frame(){

//     //     if(degrees >= 360){
//     //         clearInterval(timerId);
//     //     }
//     //     else{
//     //         degrees+=1;
//     //         myAnimation.style.transform = "rotateZ("+degrees+"deg)";

//     //     }
//     // }
    
//     // function frame(){

//     //     if(x >= 200 || y >= 200){
//     //         clearInterval(timerId);
//     //     }
//     //     else{

//     //         degrees+=2;
//     //         x+=1;
//     //         y+=1;
//     //         myAnimation.style.left = x + "px";
//     //         myAnimation.style.top = y + "px";
//     //         myAnimation.style.transform = "rotateZ("+degrees+"deg)";
//     //     }
//     // }


//     function frame(){

//         if(scaleX <= 0.1 || scaleY <= 0.1){
//             clearInterval(timerId);
//         }

//         else{
//             scaleX-=0.01;
//             scaleY-=0.01;
//             myAnimation.style.transform = "scale("+scaleX+", "+scaleY+")";
//         }
//     }


// }

//Canvas API--------------->

// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");

// context.strokeStyle = "#454545";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(0,0);
// context.lineTo(250, 250);
// context.lineTo(250, 500);
// context.moveTo(500,0);
// context.lineTo(250, 250);
// context.stroke();

//draw triangle
// context.strokeStyle = "gray"
// context.fillStyle = "skyblue";
// context.linewidth = 40;
// context.beginPath();
// context.moveTo(250,0);
// context.lineTo(0, 250);
// context.lineTo(500, 250);
// context.lineTo(250, 0);
// context.stroke();
// context.fill();

//draw Rectangle
// context.fillStyle = "#454545";
// context.fillRect(0, 0, 250, 250);
// context.strokeStyle = "#222";
// context.strokeRect(0, 0, 250, 250);

// context.fillStyle = "blue";
// context.fillRect(0, 250, 250, 250);
// context.strokeStyle = "#222";
// context.strokeRect(0, 250, 250, 250);


// context.fillStyle = "red";
// context.fillRect(250, 250, 250, 250);
// context.strokeStyle = "#222";
// context.strokeRect(250, 250, 250, 250);

// context.fillStyle = "green";
// context.fillRect(250, 0, 250, 250);
// context.strokeStyle = "#222";

//Draw Circle
// context.fillStyle = "red";
// context.strokeStyle = "darkblue";
// context.lineWidth = 10;
// context.beginPath();
// context.arc(250, 250, 200, 0, 2 * Math.PI);
// context.stroke();
// context.fill();

//Draw text
// context.font = "50px Times New Roman";
// context.fillStyle = "#454545";
// context.textAlign = "center"
// context.fillText("YOU WIN TODAY!", canvas.width / 2, canvas.height / 2);

//WINDOW OBJECT

// const myButton = document.querySelector("#myButton");
// console.dir(window);
// console.log(window.outerWidth);
// console.log(window.outerHeight);

// console.log(window.scrollX);
// console.log(window.scrollY);

// console.log(window.location.href);
// window.location.href = "https://google.com";
// console.log(window.location.hostname);
// console.log(window.location.pathname);

// myButton.addEventListener("click",() => window.open("https://google.com"));
// myButton.addEventListener("click",() => window.close("https://google.com"));
// myButton.addEventListener("click",() => window.print());

// window.alert("hello");
// window.confirm("Hello, Press ok to continue!");
// let age = window.prompt("Enter your age");
// if(age < 18){

//     window.alert("You must be 18+ to visit this site");
//     window.close();
// }


//Cookies

// document.cookie = "firstName=Spongebob; expires=Tue, 30 January 2024 12:00:00 UTC; paths/";

// console.log(document.cookie);

// setCookie("email", "Ken@gmail.com", 24);
// setCookie("firstName", "Ken", 24);
// setCookie("lastName", "Tin", 24);

// console.log(getCookie("lastName"));
// console.log(getCookie("firstName"));
// console.log(getCookie("email"));

// console.log(document.cookie);

// const firstText = document.querySelector("#firstText");
// const lastText = document.querySelector("#lastText");
// const submitBtn = document.querySelector("#submitBtn");
// const cookieBtn = document.querySelector("#cookieBtn");

// submitBtn.addEventListener("click", () => {
//     setCookie("firstName", firstText.value, 24);
//     setCookie("lastName", lastText.value, 24);

// });
// cookieBtn.addEventListener("click", () => {
//     firstText.value = getCookie("firstName");
//     lastText.value = getCookie("lastName");

// });


// // deleteCookie("firstName");
// // deleteCookie("lastName");

// function setCookie(name, value, daysToLive){

//     const date = new Date();
//     date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
//     let expires = "expires" + date.toUTCString();
//     document.cookie = `${name}=${value}; ${expires}; paths/`;
// }

// function deleteCookie(name){

//     setCookie(name, null, null);
// }

// function getCookie(name){

//     const cDecoded = decodeURIComponent(document.cookie);
//     const cArray = cDecoded.split("; ");
//     let result = null;

//     cArray.forEach(element => {
//         if(element.indexOf(name) == 0){
//             result = element.substring(name.length + 1)

//         }

//     })
//     return result;

// }


//stopwatch program----->

// const timeDisplay = document.querySelector("#timeDisplay");
// const startBtn = document.querySelector("#startBtn");
// const pauseBtn = document.querySelector("#pauseBtn");
// const resetBtn = document.querySelector("#resetBtn");


// let startTime = 0;
// let elapsedTime = 0;
// let currentTime = 0;
// let paused = true;
// let intervlaId;
// let hrs = 0;
// let mins = 0;
// let secs = 0;

// startBtn.addEventListener("click", () =>{
//     if(paused){
//         paused = false;
//         startTime = Date.now() - elapsedTime;
//         intervlaId = setInterval(updateTime, 75);

//     }
// });

// pauseBtn.addEventListener("click", () =>{

//     if(!paused){

//         paused = true;
//         elapsedTime = Date.now() - startTime;
//         clearInterval(intervlaId);
//     }

// });
// resetBtn.addEventListener("click", () =>{

//     paused = true;
//     clearInterval(intervlaId);
//     startTime = 0;
//     elapsedTime = 0;
//     currentTime = 0;
//     secs = 0;
//     mins = 0;
//     hrs = 0;
//     timeDisplay.textContent = "00:00:00";
// });

// function updateTime(){
//     elapsedTime = Date.now() - startTime;

//     secs = Math.floor((elapsedTime / 1000) % 60);
//     mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
//     hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

//     secs = pad(secs);
//     mins = pad(mins);
//     hrs = pad(hrs);

//     timeDisplay.textContent = `${hrs}:${mins}:${secs}`;


//     function pad(unit){
//         return (("0") + unit).length > 2 ? unit : "0" + unit;

//     }
// }

//ROCK-PAPER-SCISSORS=============>>>

// const playerText = document.querySelector("#playerText");
// const computerText = document.querySelector("#computerText");
// const resultText = document.querySelector("#resultText");
// const choiceBtns = document.querySelectorAll(".choiceBtn");
// let player;
// let computer;
// let result;

// choiceBtns.forEach(button => button.addEventListener("click",() => {

//     player = button.textContent;
//     computerTurn();
//     playerText.textContent = `Player: ${player}`;
//     computerText.textContent = `Computer: ${computer}`;
//     resultText.textContent = checkWinner();
// }));

// function computerTurn(){

//     const randNum = Math.floor(Math.random() * 3) + 1;

//     switch(randNum){
//         case 1:
//             computer = "ROCK";
//             break;
//         case 2:
//             computer = "PAPER";
//             break;
//         case 3:
//             computer = "SCISSORS";
//             break;
//     }

// }

// function checkWinner(){

//     if(player == computer){
//         return "Draw!";
//     }
//     else if(computer == "ROCK"){

//         return (player == "PAPER") ? "You Win!" : "You Lose!"
//     }
//     else if(computer == "PAPER"){

//         return (player == "SCISSORS") ? "You Win!" : "You Lose!"
//     }
//     else if(computer == "SCISSORS"){

//         return (player == "ROCK") ? "You Win!" : "You Lose!"
//     }
// }


//TIC-TAC-TOE=============>>>

// const cells = document.querySelectorAll(".cell");
// const statusText = document.querySelector("#statusText");
// const restartBtn = document.querySelector("#restartBtn");
// const winConditions =[
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]

// ];
// let options = ["", "", "", "", "", "", "", "", ""];
// let currentPlayer = "X";
// let running = false;

// initializeGame();

// function initializeGame(){
//     cells.forEach(cell => cell.addEventListener("click", cellClicked));
//     restartBtn.addEventListener("click", restartGame);
//     statusText.textContent = `${currentPlayer}'s turn`;
//     running = true;
// }

// function cellClicked(){
//     const cellIndex = this.getAttribute("cellIndex");

//     if(options[cellIndex] != "" || !running){
//         return;
        
//     }

//     updateCell(this, cellIndex);
//     checkWinner();
//     // changePlayer();
// }

// function updateCell(cell, index){
//     options[index] = currentPlayer;
//     cell.textContent = currentPlayer;
    
// }

// function changePlayer(){
//  currentPlayer = (currentPlayer == "X") ? "O" : "X";
//  statusText.textContent = `${currentPlayer}'s turn`;

// }
// function checkWinner(){
//     let roundWon = false;

//     for(let i = 0; i < winConditions.length; i++){
//         const condition = winConditions[i];
//         const cellA = options[condition[0]];
//         const cellB = options[condition[1]];
//         const cellC = options[condition[2]];

//         if(cellA == "" || cellB == "" || cellC == "") {
//             continue;

//         }
//         if(cellA == cellB && cellB == cellC){
//             roundWon = true;
//             break;
//         }

//     }

//     if(roundWon){
//         statusText.textContent = `${currentPlayer} wins!`;
//         running = false;
//     }

//     else if(!options.includes("")){
//         statusText.textContent = `Draw!`;
//         running = false;

//     }
//     else{
//         changePlayer();
//     }
    
// }

// function restartGame(){
//     currentPlayer = "X";
//     options = ["", "", "", "", "", "", "", "", ""];
//     statusText.textContent = `${currentPlayer}'s turn`;
//     cells.forEach(cell => cell.textContent = "");
//     running = true; 
// }

//Snake Game Javascript =============>>>

// const gameBoard = document.querySelector("#gameBoard");
// const ctx = gameBoard.getContext("2d");
// const scoreTxt = document.querySelector("#scoreText");
// const resetBtn = document.querySelector("#resetBtn");
// const gameWidth = gameBoard.width;
// const gameHeight = gameBoard.height;
// const boardBackground = "white";
// const snakeColor = "lightgreen";
// const snakeBorder = "black";
// const foodcolor = "red";
// const unitSize = 25;
// let running = false;
// let xVelocity = unitSize;
// let yVelocity = 0;
// let foodX;
// let foodY;
// let score = 0;
// let snake = [
//     {x:unitSize * 4, y:0},
//     {x:unitSize * 3, y:0},
//     {x:unitSize * 2, y:0},
//     {x:unitSize, y:0},
//     {x:0, y:0}
// ];

// window.addEventListener("keydown", changeDirection);
// resetBtn.addEventListener("click", resetGame);

// gameStart();


// function gameStart(){
//     running = true;
//     scoreTxt.textContent = score;
//     createFood();
//     drawFood();
//     nextTick();
// };
// function nextTick(){
//     if(running){
//         setTimeout(() =>{
//             clearBoard();
//             drawFood();
//             drawSnake();
//             moveSnake();
//             drawFood();
//             checkGameOver();
//             nextTick();
//         }, 75);
//     }
//     else{
//         displayGameOver();
//     }
// };
// function clearBoard(){
//     ctx.fillStyle = boardBackground;
//     ctx.fillRect(0, 0, gameWidth, gameHeight);
// };
// function createFood(){

//     function randomFood(min, max){
//         const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
//         return randNum;

//     }
//     foodX = randomFood(0, gameWidth - unitSize);
//     foodY = randomFood(0, gameWidth - unitSize);
// };
// function drawFood(){

//     ctx.fillStyle = foodcolor;
//     ctx.fillRect(foodX, foodY, unitSize, unitSize);
// };
// function moveSnake(){
//     const head = {x: snake[0].x + xVelocity,
//                   y: snake[0].y + yVelocity};

//     snake.unshift(head);
//     //if food is eaten
//     if(snake[0].x == foodX && snake[0].y == foodY){
//         score+=1;
//         scoreTxt.textContent = score;
//         createFood();
//     }
//     else{
//         snake.pop();

//     }
// };
// function drawSnake(){
//     ctx.fillStyle = snakeColor;
//     ctx.strokeStyle = snakeBorder;
//     snake.forEach(snakePart => {
//         ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
//         ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
//     });
// };
// function changeDirection(event){
//     const keyPressed = event.keyCode;
//     const LEFT = 37;
//     const UP = 38;
//     const RIGHT = 39;
//     const DOWN = 40;

//     const goingUp = (yVelocity == -unitSize);
//     const goingDown = (yVelocity == unitSize);
//     const goingRight = (xVelocity == unitSize);
//     const goingLeft = (xVelocity == -unitSize);

//     switch(true){
//         case (keyPressed == LEFT && !goingRight):
//             xVelocity = -unitSize;
//             yVelocity = 0;
//             break;
//         case (keyPressed == UP && !goingDown):
//             xVelocity = 0;
//             yVelocity = -unitSize;
//             break; 
//         case (keyPressed == RIGHT && !goingLeft):
//             xVelocity = unitSize;
//             yVelocity = 0;
//             break;
//         case (keyPressed == DOWN && !goingUp):
//             xVelocity = 0;
//             yVelocity = unitSize;
//             break;

//     }

// };
// function checkGameOver(){
//     switch(true){
//         case (snake[0].x < 0):
//             running = false;
//             break;
//         case (snake[0].x >= gameWidth):
//             running = false;
//             break;
//         case (snake[0].y < 0):
//             running = false;
//             break;
//         case (snake[0].y >= gameHeight):
//             running = false;
//             break;
//     }
//     for( let i = 1; i < snake.length; i+=1){
//         if(snake[i].x == snake[0].x && snake[i].y == snake[0]){
//             running = false;

//         }
//     }
// };
// function displayGameOver(){
//     ctx.font = "50px MV Roll";
//     ctx.fillStyle = "black";
//     ctx.textAlign = "center";
//     ctx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2);
//     running = false;

// };
// function resetGame(){
//     score = 0;
//     xVelocity = unitSize;
//     yVelocity = 0;
//     snake = [
//         {x:unitSize * 4, y:0},
//         {x:unitSize * 3, y:0},
//         {x:unitSize * 2, y:0},
//         {x:unitSize, y:0},
//         {x:0, y:0}
//     ];
//     gameStart();
// };


//PINGPONG GAME JAVASCRIPT=============>>>
const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText")
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "forestgreen";
const paddle1Color = "lightblue";
const paddle2Color = "red";
const paddleBorder = "black";
const ballColor = "yellow";
const ballBoarderColor = "black";
const ballRadius = 12.5;
const paddleSpeed = 50;
let player1Score = 0;
let player2Score = 0;
let intervlaID;
let ballSpeed = 1;
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let ballXDirection = 0;
let ballYDirection = 0;
let paddle1 = {
    width: 25,
    height: 100,
    x: 0,
    y: 0
}
let paddle2 = {
    width: 25,
    height: 100,
    x: gameWidth - 25,
    y: gameHeight - 100
};

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click",resetGame);

gameStart();
drawPaddles();

function gameStart(){
    createBall();
    nextTick();
};

function nextTick(){
    intervlaID = setTimeout(() => {
        clearBoard();
        drawPaddles();
        moveBall();
        drawBall(ballX, ballY);
        checkCollision();
        nextTick();
    }, 10)

};
function clearBoard(){
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};
function drawPaddles(){
    ctx.strokeStyle = paddleBorder;

    ctx.fillStyle = paddle1Color;
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    
    ctx.fillStyle = paddle2Color;
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
    ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);

};
function createBall(){
    ballSpeed = 1;
    if(Math.round(Math.random()) == 1){
        ballXDirection = 1;
    }
    else{
        ballXDirection = -1;
    }
    if(Math.round(Math.random()) == 1){
        ballYDirection = 1;
    }
    else{
        ballYDirection = -1;
    }
    ballX = gameWidth / 2;
    ballY = gameHeight / 2;
    drawBall(ballX, ballY);

};
function moveBall(){
    ballX += (ballSpeed * ballXDirection);
    ballY += (ballSpeed * ballXDirection);
};
function drawBall(ballX, ballY){
    ctx.fillStyle = ballColor;
    ctx.strokeStyle = ballBoarderColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
};
function checkCollision(){
    if(ballY <= 0 + ballRadius){
        ballYDirection *= -1;
    }
    if(ballY >= gameHeight - ballRadius){
        ballYDirection *= -1;
    }
    if(ballY <= 0){
        player2Score+=1;
        updateScore();
        createBall();
        return;
    }
    if(ballX >= gameWidth){
        player1Score+=1;
        updateScore();
        createBall();
        return;
    }
    if(ballX <= (paddle1.x + paddle1.width + ballRadius)){
        if(ballY > paddle1.y && ballY < paddle1.y + paddle1.height){
            ballX = (paddle1.x + paddle1.width ) + ballRadius; // if ball gets stuck
            ballXDirection *= -1;
            ballSpeed += 1;
        }
    }
    if(ballX >= (paddle2.x - ballRadius)){
        if(ballY > paddle2.y && ballY < paddle2.y + paddle2.height){
            ballY = paddle2.x - ballRadius; // if ball gets stuck
            ballXDirection *= -1;
            ballSpeed += 1;
        }
    }
};
function changeDirection(event){
    const keyPressed = event.keyCode;
    // console.log(keyPressed);
    const paddle1Up = 87;
    const paddle1Down = 83;
    const paddle2Up = 38;
    const paddle2Down = 40;

    switch(keyPressed){
        case(paddle1Up):
            if(paddle1Up > 0){
                paddle1.y -= paddleSpeed;
            }
            break;
        case(paddle1Down):
            if(paddle1Down < gameHeight - paddle1.height){
                paddle1.y += paddleSpeed;
            }
            break;
        case(paddle2Up):
            if(paddle2Up > 0){
                paddle2.y -= paddleSpeed;
            }
            break;
        case(paddle2Down):
            if(paddle2Down < gameHeight - paddle2.height){
                paddle2.y += paddleSpeed;
            }
            break;  
    }
};
function updateScore(){
    scoreText.textContent = `${player1Score} : ${player2Score}`;
};
function resetGame(){
    player1Score = 0;
    player2Score = 0;

    paddle1 = {
        width: 25,
        height: 100,
        x: 0,
        y: 0
    }
    paddle2 = {
        width: 25,
        height: 100,
        x: gameWidth - 25,
        y: gameHeight - 100
    };
    ballSpeed = 1;
    ballX = 0;
    ballY = 0;
    ballXDirection = 0;
    ballYDirection = 0;
    updateScore();
    clearInterval(intervlaID);
    gameStart();

}
// //Function that returns true if the string
//     // is made up of two alternating characters
//     function isTwoAlter(s)
//     {
//         // Check if ith character matches
//     // with the character at index (i + 2)
//     for (let i = 0; i < s.length - 2; i++)
//     {
//         if (s[i] != s[i+2])
//         {
//             return false;
//         }
//     }
   
//     // If string consists of a single
//     // character repeating itself
//     if (s[0] == s[1])
//         return false;
   
//     return true;
//     }
     
//     // Driver code
//     let str = "ABAB";
//     if (isTwoAlter(str))
//         document.write( "Yes");
//     else
//         document.write("No");
     
//     // This code is contributed by rag2127

// const numberArr = [23, 122, 1, 23, 4, 56];

// // get highest number
// const highest = Math.max(...numberArr);

// // get lowest number
// const lowest = Math.min(...numberArr);

// console.log("Highest Number: " + highest); // Highest Number: 122

// console.log("Lowest Number: " + lowest); // Lowest Number: 1


// var firstMissingPositive = function(nums) {
//     var swap = function(i, j) {
//         var tmp = nums[i];
//         nums[i] = nums[j];
//         nums[j] = tmp;
//     };

//     for (let i = 0; i < nums.length; i++) {
//         while (0 < nums[i] && nums[i] - 1 < nums.length
//                 && nums[i] != i + 1
//                 && nums[i] != nums[nums[i] - 1]) {
//             swap(i, nums[i] - 1);
//         }
//     }

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] != i + 1) {
//             return i + 1;
//         }
//     }
//     return nums.length + 1;
// };










 

