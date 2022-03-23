// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = document.getElementById("length")
var includeUpperCaseLetters = document.getElementById("upperCaseLetters")
var includeLowerCaseLetters = document.getElementById("LowerCaseLetters")
var includeNumbers = document.getElementById("numbers")
var includeSpecial = document.getElementById("special")

// var passwordLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var passwordNumbers = "0123456789"
// var passwordSpecial = "!@#$%^&*()"


passwordLength.addEventListener('input', passwordLengthInput)


// Read input of password length
function passwordLengthInput(event) {
  var value = event.target.value
  passwordLength.value = value
}

// Function for generating the password with selected parameters

// function generatePassword(passwordLength, includeUpperCaseLetters, includeLowerCaseLetters, includeNumbers, includeSpecial) {

// }



//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// function generatePassword() {
//   generateBtn.addEventListener('click', function () {
//     var passwordLength = prompt("Please choose a password length between 8-128 characters.")
//     if (
//       isNaN(passwordLength) ||
//       passwordLength < 8 || passwordLength > 128
//     ) {
//       prompt("Please choose password length number between 8 & 128.");
//     }
//     else {
//       alert("Password generated with " + passwordLength + " characters.")
//     }
//     var passwordIncludeLetters = prompt("Do you want your password to include letters? Choose Y or N.")
//     if (passwordIncludeLetters === "Y"
//     ) {
//       alert("Your password will include letters");
//     }
//     else if (passwordIncludeLetters === "N") {
//       alert("Your password will not include letters");
//     }
//     else {
//       prompt("Please choose Y or N");
//     }
//   })
// }