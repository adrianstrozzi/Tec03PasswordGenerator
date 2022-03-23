// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var passwordNums = "0123456789"
var passwordSpecialChars = "!@#$%^&*()"

// var passwordChars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function generatePassword() {
  generateBtn.addEventListener('click', function () {
    var passwordLength = prompt("Please choose a password length between 8-128 characters.")
    if (
      isNaN(passwordLength) ||
      passwordLength < 8 || passwordLength > 128
    ) {
      prompt("Please choose password length number between 8 & 128.");
    }
    else {
      alert("Password generated with " + passwordLength + " characters.")
    }
    var passwordIncludeLetters = prompt("Do you want your password to include letters? Choose Y or N.")
    if (passwordIncludeLetters === "Y"
    ) {
      alert("Your password will include letters");
    }
    else if (passwordIncludeLetters === "N") {
      alert("Your password will not include letters");
    }
    else {
      prompt("Please choose Y or N");
    }
  })
}





//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);