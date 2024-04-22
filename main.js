console.log("Hello World!");
// ASSIGNMENT SOLUTIONS
// TASK 1 is the installation of Node.js, Typescript and VS Code on our computer that is completed!
// TASK 2
let personName = "Eric";
console.log(`hello ${personName},would you like to learn some Python today?`);
// TASK 3
let personName = "Dua Majeed";
    in lowercase;
console.log("lowercase:", personName.toLowerCase());
    in uppercase;
console.log("uppercase:", personName.toUpperCase());
title;
console.log("titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
// TASK 4
let quote = "A person who never made a mistake never tried anything new.";
let author = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);
//TASK 5
let famous_person = "Albert Einstein";
let message = `${famous_person} once said, "${quote}"`;
console.log(message);
//TASK 6
let personName = "\t\n   John Doe  \n\t";
console.log("Original:", personName);
console.log("Stripped:", personName.trim());
//TASK 7 AND 8
console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
//TASK 9
let favouriteNumber = 6;
console.log(`My favourite number is ${favouriteNumber}.`);
//TASK 10   (This task is all about comments we have to show how to comment in typescript)
// author:[Dua Majeed]
// date:[Monday , February 19,2024]
// taking this from task:9 printing my favourite number.
//let favouriteNumber: number = 6;
//revealing my favourite number in a message format.
//console.log(`My favourite number is ${favouriteNumber}.`);
//TASK 11
let names = ["dua", "aqsa", "noor", "bilal", "hassan"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
//TASK 12
let names = ["dua", "aqsa", "noor", "bilal", "hassan"];
let message = "Would you like to eat pizza?";
console.log(names[0] + " " + message);
console.log(names[1] + " " + message);
console.log(names[2] + " " + message);
console.log(names[3] + " " + message);
console.log(names[4] + " " + message);
//TASK 13
let transportation = ["Honda Motorcycle", "Civic", "Vitz", "Toyota Revo"];
transportation.map((items) => console.log(`I would like to own a ${items}`));
//TASK 14
let guestArr = ["dua", "aqsa", "noor"];
guestArr.map((items) => (console.log(`Dear ${items} , you are invited to the lunch`)));
//TASK 15
let guestArr = ["dua", "aqsa", "noor", "bilal"];
let canNotAttend = "dua";
console.log(canNotAttend + " " + "can not attend the dinner.");
let newGuest = "hassan";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map((items) => console.log(`Dear ${items} , you are invited o the dinner.`));
//TASK 16
let guestArr = ["hassan", "aqsa", "noor", "bilal"];
let canNotAttend = "aqsa";
let newGuest = "dua";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map((items) => console.log(`Dear ${items} , I found a bigger dinner table so I am inviting more people.`));
// // PART 2 Beginning
let guestBeg = "inaya";
guestArr.unshift(guestBeg);
console.log(guestArr);
// PART 3 Middle
let middleGuest = "fajur";
let middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
// //PART 4 APPENDID
guestArr.push("arham");
console.log(guestArr);
// //PART 5 
guestArr.map((items) => console.log(`Dear ${items} , you are invited to the huge dinner party`));
//TASK 17
// // Initial list of guests
let guests = ["fajur", "aqsa", "noor", "bilal", "hassan"];
// Informing that only two people can be invited 
console.log("Due to limited space, only two people can be invited for dinner.");
// // Removing guests until only two names remain
while (guests.length > 2) {
    const removeguest = guests.pop();
    console.log(`sorry , ${removeguest}, you're no longer invited to dinner.`);
}
// // Printing invitations to the remaining two guests
let guests = ["fajur", "aqsa"];
guests.forEach((guest) => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
// // Removing the last two names from the guest list 
guests.pop();
guests.pop();
// // // Printing the final guest list 
console.log("Final guest list:", guests);
//TASK 18
// // Store the locations in an array
let placesToVisit = ["Tokyo", "Pakistan", "America", "China", "Japan"];
// // Print the array in its original order
console.log("Original order:", placesToVisit);
// // Print the array in alphabetical order without modifying the actual list 
console.log("Alphabetical order:", [...placesToVisit].sort());
// // Show that the array is still in its original order 
console.log("Original order after sorting:", placesToVisit);
// // Print the array in reverse alphabetical order without changing the order of original list 
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
// // Show that the array is still in its original order 
console.log("Original order after reverse sorting:", placesToVisit);
// Reverse the order of the list 
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
// // Reverse the order of the list again to get back to original order 
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
// // Sort the array in alphabetical order 
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
// // Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);
// //TASK 19
let invitations = ["fajur", "aqsa"];
let count_invitations = invitations.length;
console.log(`${count_invitations} people will come to the dinner`);
// // TASK 20
let Mountains = ["Mount Everest", "K2", "Himalayas", "Nanga parbat", "Mount Elbrus"];
console.log("List of Mountains:");
console.log(Mountains);
// //TASK 21
let person = { name: "Dua Majeed", fname: "female", age: 19 };
console.log(person);
// // TASK 22
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursady", "Friday", "Saturday"];
// console.log(days{7});  we have to declare the error so i have showed the error
console.log(days[6]);
// TASK 23
let car = "subaru";
console.log("is car == 'subaru'? predict true");
console.log(car == 'subaru');
console.log("is car != 'civic'? predict true");
console.log(car != 'civic');
console.log("is car == 'Subaru'? predict false");
console.log(car == 'Subaru');
console.log("is car == 'SUBARU'? predict false");
console.log(car == 'SUBARU');
console.log("is car.length == 6 ? predict true");
console.log(car.length == 6);
console.log("is car.length != 10 ? predict true");
console.log(car.length != 10);
console.log("is 10>45 ? predict false");
console.log(10 > 45);
console.log("is 3 <= 2 ? predict false");
console.log(3 <= 2);
console.log("is 72 > 63? predict true");
console.log(72 > 63);
console.log("is 72 >= 83? predict false");
console.log(72 >= 83);
//TASK 24
// Tests for equality and inequality with strings
let name_1 = "Dua";
let name_2 = "Dua Majeed";
let name_3 = "Miss Dua Majeed";
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 != name_2) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
// Tests using the lower case function
if (name_1 != name_3) {
    console.log("names are equal");
}
// NUMERICAL TESTS
let age_1 = 20;
let age_2 = 22;
if (age_1 == 20) {
    console.log("eligible for taking ride");
}
if (age_1 != 22) {
    console.log("eligible for taking ride in amusement park");
}
if (age_1 <= age_2) { //less 
    console.log("younger");
}
if (age_2 >= age_1) { //greater
    console.log("older");
}
// TEST USING AND & OR OPERATORS
if (age_1 == 20 && age_2 == 22) {
    console.log("person is eligible for vote");
}
if (age_1 == 20 || age_2 != 22) {
    console.log("person is not eligible for vote");
}
// TEST WHETHER ITEMS IN ARRAY
let Mountains = ["Mount Everest", "K2", "Himalayas", "Nanga parbat", "Mount Elbrus"];
if (Mountains.includes("Mount Everest")) {
    console.log("Mount Everest is in mountain list");
}
// TEST whether items not in an array
if (!Mountains.includes("Mount Fuji")) {
    console.log("Mount Fuji is not includes in an array");
}
// TASK 25
let aliens_color = "green";
if (aliens_color == "green")
    console.log("you earn 5 points");
let aliens_color = "blue";
if (aliens_color == "seegreen") {
    console.log("no output");
}
//TASK 26
let aliens_color = "green";
if (aliens_color == "green") {
    console.log("player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 points");
}
let aliens_color = "blue";
if (aliens_color == "green") {
    console.log("player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 points");
}
// TASK 27
let aliens_color = "green";
if (aliens_color == "green") {
    console.log("player just earned 5 points");
}
else if (aliens_color == "yellow") {
    console.log("player just earned 10 points");
}
else {
    console.log("15 points");
}
let aliens_color = "yellow";
if (aliens_color == "green") {
    console.log("player just earned 5 points");
}
else if (aliens_color == "yellow") {
    console.log("player just earned 10 points");
}
else {
    console.log("15 points");
}
let aliens_color = "red";
if (aliens_color == "green") {
    console.log("player just earned 5 points");
}
else if (aliens_color == "yellow") {
    console.log("player just earned 10 points");
}
else {
    console.log("15 points");
}
//TASK 28 ...........2,4,13,20,65,Elder
let age = 1;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are an adult");
}
else {
    console.log("you are an elder");
}
let age = 3;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are an adult");
}
else {
    console.log("you are an elder");
}
let age = 10;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are an adult");
}
else {
    console.log("you are an elder");
}
let age = 18;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are an adult");
}
else {
    console.log("you are an elder");
}
let age = 57;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are an adult");
}
else {
    console.log("you are an elder");
}
let age = 100;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are an adult");
}
else {
    console.log("you are an elder");
}
// TASK 29
let favourite_fruits = ["strawberry", "blueberry", "mango"];
if (favourite_fruits.includes("strawberry")) {
    console.log("you really like bananas");
}
if (favourite_fruits.includes("peach")) {
    console.log("you really like bananas");
}
if (favourite_fruits.includes("blueberry")) {
    console.log("you really like bananas");
}
if (favourite_fruits.includes("watermelon")) {
    console.log("you really like bananas");
}
if (favourite_fruits.includes("mango")) {
    console.log("you really like bananas");
}
// TASK 30
let users = ["admin", "eric", "dua", "fajur", "aqsa", "noor"];
for (let user of users) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again`);
    }
}
// TASK 31
let users = [];
if (users.length === 0) {
    console.log("We need to find some users!");
}
// TASK 32
let current_users = ["dua", "Aqsa", "Noor", "Bilal", "Hassan", "fajur"];
let new_users = ["dua", "fajur", "Inaaya", "Hira", "Arham", "Aliya"];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry ${new_user} , that username is taken`);
    }
    else {
        console.log(`${new_user}, username is available`);
    }
}
// TASK 33
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
//TASK 34
let favourite_pizza = ["Cheesy Garlic Pizza", "Meat Pizza", "BBQ Chicken Pizza"];
for (let pizza of favourite_pizza) {
    console.log(pizza);
}
console.log("\n");
for (let pizza of favourite_pizza) {
    console.log(` I really like ${pizza} `);
}
console.log("\n I really love pizza");
// TASK 35
let animals = ["dog", "lion", "cat"];
for (let animal of animals) {
    console.log(animal);
}
console.log("\n");
for (let animal of animals) {
    console.log(`A ${animal} has a sharp teeth`);
}
console.log("\n All of these animals have a tail");
console.log("\n All of these are great pets!but i would make lion a great pet!");
// TASK 36
function makeShirt(size, text) {
    console.log(`\n you order a ${size} shirt that says ${text}`);
}
makeShirt('large', '"i love javascript"');
makeShirt('medium', '"i love HTML & CSS"');
// TASK 37
function makeShirt(size = 'large', text = 'I love typescript') {
    console.log(`you have order a ${size}, shirt that says ${text}`);
}
makeShirt();
makeShirt('medium');
// // part 2 any size different msg
makeShirt('small', 'my favourite cartoon is KEYMON ACHE');
// TASK 38
function describe_city(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}`);
}
describe_city('Karachi');
describe_city('France', 'Europe');
describe_city('Lahore');
// TASK 39
function cityCountry(city, country) {
    return `${city}, ${country}`;
}
let c1 = cityCountry('Lahore', 'Pakistan');
let c2 = cityCountry('Tokyo', 'Japan');
let c3 = cityCountry('Makkah', 'Saudia Arabia');
console.log(c1);
console.log(c2);
console.log(c3);
//TASK 40
function makeAlbum(artist, title) {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
let album = makeAlbum("Fahad", "Chapter of life");
console.log(album);
album = makeAlbum("Arham", "Sukoon e Zindagi");
console.log(album);
album = makeAlbum("Faiz", "Diamond Waves");
console.log(album);
//TASK 41
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["Fayyaz", "Faraz", "Faiz"];
show_magicians(magician);
// // TASK 42
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) { // i stands for index string
        magicians[i] = magicians[i] + ' The Great';
    }
}
const magicians2 = ["Fayyaz", "Faraz", "Faiz"];
make_great(magicians2);
show_magicians(magicians2);
// TASK 43
function make_great2(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + '  The Great');
    }
    return greatMagicians;
}
const magicians3 = ["Fayyaz", "Faraz", "Faiz"];
const greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
// TASK 44
function sandwich(...items) {
    console.log("Sandwich order:");
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`);
    }
}
console.log("Enjoy your sandwich Fajur Shaikh");
sandwich('chicken', 'mayonnise', 'mustard');
sandwich('cucumber', 'capsicum', 'cheese');
sandwich('cabbage', 'crunchy chicken', 'garlic sauce');
function createCar(manufacturer, model, optional) {
    return {
        manufacturer,
        model,
        ...optional
    };
}
const mycar = createCar("Volkswagen", "Jetta", { color: "black", year: "2022" });
console.log(mycar);
export {};
// ALL ASSIGNMENTS HAS BEEN COMPLETED!!
