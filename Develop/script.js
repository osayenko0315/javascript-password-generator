// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let userNumbers = window.confirm(
  "Like to include numbersin password"
);
let userSymbols = window.confirm(
  "Like to include symbols in password"
);
let userLowerCase = window.confirm(
  "Like to include lower case in password"
);
let userUpperCase = window.confirm(
  "Like to include upper case in password"
);

let numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbolsList = ["!", "@", "#", "$", "%", "^", "&", "*"];
let lowerCaseList = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let upperCaseList = [];

for (let i = 0; i < lowerCaseList.length; i++) {
  upperCaseList[i] = lowerCaseList[i]. toLocaleUpperCase();
}
 
if (userNumbers === true) {
  optionCart.push(numberList)
}

if (userSymbols === true) {
  optionCart.push(symbolsList)
}

if (userLowerCase === true) {
  optionCart.push(lowerCaseList)
}

if (userUpperCase === true) {
  optionCart.push(numberList)
}

let generatePassword == "";




function writePassword()
let password = generatePassword();
let passwordText = document.querySelector("#password")

if (password) {
  passwordText.value = password
}

generateButton.addEventListener("click" writePassword);