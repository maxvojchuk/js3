"use strict";

//1
let result = 5 + 5 + "5";
console.log(result);
console.log(typeof result);

//2
let email = "maxvoijchuk09@gmail.com";

let emailLength = email.length;
console.log(email);
if (email.includes("@")) {
  console.log("Емеіл має @");
} else {
  console.log("Емеіл не має @");
}
console.log(emailLength);
//3
let my = "My";
let name = "name";
let is = "is";
let fullName = my + " " + name + " " + is;
fullName += " Viktor";
console.log(fullName);
//4
let userName = "Олександре";
let payment = 300;
let message = `Дякуємо, ${userName} !До сплати ${payment} гривень`;

alert(message);
