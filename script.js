var passwordLength;
var password;

// Variables to track if user wishes to include lowercase letters, uppercase letters, numbers and/or special characters in their password
var includeLowercase;
var includeUppercase; 
var includeNumeric;
var includeSpecial;

// Arrays of values to create password
const digits = ["0","1","2","3","4","5","6","7","8","9"];
const specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+","-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[","\\", "]", "^", "_", "`", "{", "|", "}", "~"];
const alphabetUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const alphabetLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input - Assignment Code
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button - Assignment Code
generateBtn.addEventListener("click", writePassword);

// Functions to generate password
function generatePassword() {
  getPasswordLength();
  getPasswordCriteria();
  createPassword();
  return password;
};

// Asks user to provide desired password length - checks for a valid length between 8 and 128 characters
function getPasswordLength() {
  passwordLength = prompt("Please enter your desired password length", "At least 8 characters and no more than 128 characters");
  passwordLength = parseInt(passwordLength);
  
  if (passwordLength < 8 || passwordLength > 128) {
    console.log("invalid length");
    getPasswordLength();
  } else {
    console.log("valid length");
    console.log(`Password length ${passwordLength}`);
  };
  return;
}

// Asks user what character types they would like to include in their passwork - checks that at least one is selected
function getPasswordCriteria() {
  
  var isPasswordCriteriaValid = false;
    
  while (!isPasswordCriteriaValid) {
    // Ask if password will include lowercase, uppercase, numeric and/or special characters
    includeLowercase = confirm("Select OK to include LOWERCASE characters, otherwise select Cancel.");
    includeUppercase = confirm("Select OK to include UPPERCASE characters, otherwise select Cancel.");
    includeNumeric = confirm("Select OK to include DIGITS, otherwise select Cancel.");
    includeSpecial = confirm("Select OK to include SPECIAL CHARACTERS, otherwise select Cancel.");         
    
    if (includeLowercase === false && includeUppercase === false && includeNumeric === false && includeSpecial === false) {
      alert("Please ensure at least one character type is selected for the password.");
    } else {
      isPasswordCriteriaValid = true;
      alert(`Include lowercase: ${includeLowercase} \n Include uppercase: ${includeUppercase} \n Include numeric: ${includeNumeric} \n Include special: ${includeSpecial}`);
    }
  }

  return;
}

// Creates an array from desired characters from other arrays then creates password by looping through this new array based on password length selected values at random
function createPassword() {
  var passwordOptions = [];
  
  // console.log(`passwordOptions: ${passwordOptions}`);

  if (includeLowercase) {
    passwordOptions = passwordOptions.concat(alphabetLowercase);
    // console.log(`passwordOptions: ${passwordOptions}`);
  }
  if (includeUppercase) {
    passwordOptions = passwordOptions.concat(alphabetUppercase);
    // console.log(`passwordOptions: ${passwordOptions}`);
  }
  if (includeNumeric) {
    passwordOptions = passwordOptions.concat(digits);
    // console.log(`passwordOptions: ${passwordOptions}`);
  }
  if (includeSpecial) {
    passwordOptions = passwordOptions.concat(specialCharacters);
    // console.log(`passwordOptions: ${passwordOptions}`);
  }
    
  // console.log(passwordOptions.length);
  // password = "password1234";
  // console.log(`Password: ${password}.`);

  return;

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
