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

// Ask user desired password length - checks for a valid length between 8 and 128 characters
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

// Asks user what character types to include in their password - checks that at least one is selected
function getPasswordCriteria() {
  
  var isPasswordCriteriaValid = false;
    
  while (!isPasswordCriteriaValid) {
    includeLowercase = confirm("Select OK to include LOWERCASE characters, otherwise select Cancel.");
    includeUppercase = confirm("Select OK to include UPPERCASE characters, otherwise select Cancel.");
    includeNumeric = confirm("Select OK to include DIGITS, otherwise select Cancel.");
    includeSpecial = confirm("Select OK to include SPECIAL CHARACTERS, otherwise select Cancel.");         
    
    if (includeLowercase === false && includeUppercase === false && includeNumeric === false && includeSpecial === false) {
      alert("Please ensure at least one character type is selected for the password.");
    } else {
      isPasswordCriteriaValid = true;
      // alert(`Include lowercase: ${includeLowercase} \n Include uppercase: ${includeUppercase} \n Include numeric: ${includeNumeric} \n Include special: ${includeSpecial}`);
    }
  }
  return;
}

// Create an array from desired characters then create password by looping through new array of desired characters
function createPassword() {
  var characterOptions = [];
  password = '';
  
  if (includeLowercase) {
    characterOptions = characterOptions.concat(alphabetLowercase);
  }
  if (includeUppercase) {
    characterOptions = characterOptions.concat(alphabetUppercase);
  }
  if (includeNumeric) {
    characterOptions = characterOptions.concat(digits);
  }
  if (includeSpecial) {
    characterOptions = characterOptions.concat(specialCharacters);
  }
  
  // Based on password length iterate through characterOptions array and add randomly selected value to password variable
  for (var i = 0; i < passwordLength; i++) {
    password = password + characterOptions[Math.floor(Math.random() * characterOptions.length)];
  }
  return;
}