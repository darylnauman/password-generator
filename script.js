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


// My Initial Code
var passwordLength;
var includeLowercase;
var includeUppercase; 
var includeNumeric;
var includeSpecial;

function generatePassword() {
  getPasswordLength();
  console.log(`Password length ${passwordLength}`);
  getPasswordCriteria();
  console.log(`Include lowercase: ${includeLowercase}`);
  console.log(`Include uppercase: ${includeUppercase}`);
  console.log(`Include numeric: ${includeNumeric}`);
  console.log(`Include special: ${includeSpecial}`);
  return;
};

function getPasswordLength() {
  passwordLength = prompt("Please enter your desired password length", "At least 8 characters and no more than 128 characters");
  passwordLength = parseInt(passwordLength);
  
  if (passwordLength < 8 || passwordLength > 128) {
    console.log("invalid length");
    getPasswordLength();
  } else {
    console.log("valid length");
  };
  return;
}

function getPasswordCriteria() {
  // Check if password will include lowercase
  includeLowercase = prompt("Include lowercase characters?");
  if (includeLowercase != null) {
    includeLowercase = true;
  } else {
    includeLowercase = false;
  }

  // Check if password will include uppercase
  includeUppercase = prompt("Include uppercase characters?");
  if (includeUppercase != null) {
    includeUppercase = true;
  } else {
    includeUppercase = false;
  }

  // Check if password will include numeric
  includeNumeric = prompt("Include numbers?");
  if (includeNumeric != null) {
    includeNumeric = true;
  } else {
    includeNumeric = false;
  }

  // Check if password will include special characters
  includeSpecial = prompt("Include special characters?");
  if (includeSpecial != null) {
    includeSpecial = true;
  } else {
    includeSpecial = false;
  }

  // check at least one type is included
}

// Acceptance Criteria

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
