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

let userWantsNumber = window.confirm(
  "Like to include numbersin password"
);
let userWantsSymbols = window.confirm(
  "Like to include symbols in password"
);
let userWantsLowerCase = window.confirm(
  "Like to include lower case in password"
);
let userWantsUpperCase = window.confirm(
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

let upperCaseList = []


function writePassword()
let password = generatePassword();
let passwordText = document.querySelector("#password")

if (password) {
  passwordText.value = password
}

generateButton.addEventListener("click" writePassword);