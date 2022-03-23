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

// Function for generating the password with selected parameters
function generatePassword(passwordLength, includeUpperCaseLetters, includeLowerCaseLetters, includeNumbers, includeSpecial) {
  characterCodes = upperCaseLettersCharCodes, lowerCaseLettersCharCodes, specialCharCodes, numbersCharCodes
  if (includeUpperCaseLetters) characterCodes = characterCodes.concat(upperCaseLettersCharCodes)
  if (includeLowerCaseLetters) characterCodes = characterCodes.concat(lowerCaseLettersCharCodes)
  if (includeNumbers) characterCodes = characterCodes.concat(numbersCharCodes)
  if (includeSpecial) characterCodes = characterCodes.concat(specialCharCodes)
  // Alert for user to select at least one checkbox
  if (!includeLowerCaseLetters && !includeUpperCaseLetters && !includeSpecial && !includeNumbers) alert("Check at least one option!")

  const includedPasswordCharacters = []
  // For loop used to iterate aaccording to password length in the input
  for (let i = 0; i < passwordLength; i++) {
    // This line used the math.floor and math.random to obtain integers and access characters Codes from our defined ranges of ASCII codes
    const characterCode = characterCodes[Math.floor(Math.random() * characterCodes.length)]
    includedPasswordCharacters.push(String.fromCharCode(characterCode))
  }
  // Join method to join all characters in the array
  return includedPasswordCharacters.join('')
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

// Function used to write password to the box which looks for checked options and the parameters used in our generatePassword function
function writePassword(event) {
  event.preventDefault()
  var passwordLength = passwordLengthInput.value
  var includeUpperCaseLetters = checkUpperCaseLetters.checked
  var includeLowerCaseLetters = checkLowerCaseLetters.checked
  var includeNumbers = checkNumbers.checked
  var includeSpecial = checkSpecial.checked

  var finalGeneratedPassword = generatePassword(passwordLength, includeUpperCaseLetters, includeLowerCaseLetters, includeNumbers, includeSpecial)
  displayPassword.innerText = finalGeneratedPassword
}




// Add event listener to generate button to execute our writePassword function when clicked
generateBtn.addEventListener("click", writePassword);