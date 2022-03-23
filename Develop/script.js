// Variable for Generate Button
var generateBtn = document.querySelector("#generate");


// Defining variables to point to our HTML elements of the different parameters that will be used for password criteria
var passwordLengthInput = document.getElementById("length")
var checkUpperCaseLetters = document.getElementById("upperCaseLetters")
var checkLowerCaseLetters = document.getElementById("lowerCaseLetters")
var checkNumbers = document.getElementById("numbers")
var checkSpecial = document.getElementById("special")
var displayPassword = document.getElementById("password")


// Event listener that triggers input read data
passwordLengthInput.addEventListener('input', passwordLengthInputHandler)


// Read input of password length
function passwordLengthInputHandler(event) {
  var value = event.target.value
  passwordLengthInput.value = value
}





// Defining variables to specify ASCII Character Code range per type of character
var upperCaseLettersCharCodes = getcharCodes(65, 90)
var lowerCaseLettersCharCodes = getcharCodes(97, 122)
var numbersCharCodes = getcharCodes(48, 57)
// concat method used to sum different ranges of ASCII codes for special characters
var specialCharCodes = getcharCodes(33, 47).concat(
  getcharCodes(58, 64)
).concat(
  getcharCodes(91, 96)
).concat(
  getcharCodes(123, 126)
)

// Array to include range of ASCII Character Codes
function getcharCodes(rangeLower, rangeUpper) {
  const charCodes = []
  for (let i = rangeLower; i <= rangeUpper; i++) {
    charCodes.push(i)
  }
  return charCodes
}







// Add event listener to generate button to execute our writePassword function when clicked
generateBtn.addEventListener("click", writePassword);