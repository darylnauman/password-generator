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

// Variables to track if user wishes to include lowercase letters, uppercase letters, numbers and/or special characters in their password
var includeLowercase;
var includeUppercase; 
var includeNumeric;
var includeSpecial;

// Arrays of values to create password
const specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+","-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[","\\", "]", "^", "_", "`", "{", "|", "}", "~"];
const alphabetUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const alphabetLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// alphabetLowercase = alphabetUppercase.map(alphabetUppercase => alphabetUppercase.toLowerCase());

function generatePassword() {
  getPasswordLength();
  console.log(`Password length ${passwordLength}`);
  getPasswordCriteria();
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
  
  var isPasswordCriteriaValid = false;
    
  while (!isPasswordCriteriaValid) {
    // Ask if password will include lowercase, uppercase, numeric and/or special characters
    includeLowercase = confirm("Select OK to include lowercase characters, otherwise select Cancel.");
    includeUppercase = confirm("Select OK to include uppercase characters, otherwise select Cancel.");
    includeNumeric = confirm("Select OK to include numbers, otherwise select Cancel.");
    includeSpecial = confirm("Select OK to include special characters, otherwise select Cancel.");         
    
    if (includeLowercase === false && includeUppercase === false && userNumeric === false && includeSpecial === false) {
      alert("Please ensure at least one character type is selected for the password.");
    } else {
      isPasswordCriteriaValid = true;
      alert(`Include lowercase: ${includeLowercase} \n Include uppercase: ${includeUppercase} \n Include numeric: ${includeNumeric} \n Include special: ${includeSpecial}`);
    }
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
