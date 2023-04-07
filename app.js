// if statements
// Example 1
var x = prompt("Where does the pop live?");
if (x === "Vatican"){
    document.write("Congratulations");
    
 }
//Example 2
var correctAnswer = "Vatican";
if (correctAnswer === "Vatican"){
    document.write("Correct!");
    console.log("Correct!");
}

// Example 3
score = 2;
userIQ = 'genius';
var answer = "Vatican";
if (answer === 'Vatican'){
    document.write('wohoo!');
    console.log(userIQ);
    console.log(++score);
}
// 4
var weight = prompt("What is your weight");
var time = prompt("Mention the time");
var age = prompt("Age");
var gender = prompt("Your gender?");

if (weight > 300 && time < 6 ){
    console.log("Come to our tryout!");
}
else {
    console.log('Come to our cookout');
}

// 5
if (weight > 300 && time < 6 && age > 17 && gender === 'male'){
    console.log("Come to our tryout!");
}
else {
    console.log("Come to our cookout")
}

// PERCENTAGE CALCULATOR
//value / total value *100
var value = prompt("Write down the value of which you want to calculate percentage");
var totalValue = prompt("Write down the total value");
var percentage = (value/totalValue)*100 + "%";
console.log(percentage);

// ARRAY
var cities = ['karachi', 'lahore', 'peshawar', 'islamabad', 'quetta'];
console.log("Welcome to" + " " + cities[3]);

var pets = [];
pets[0] = 'cats';
pets[1] = 'dogs';
pets[2] = 'birds';
pets[6] = 'lion'
pets.pop();
pets.push("fish", "ferret");
console.log(pets);