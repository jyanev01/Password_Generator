

// ASSIGNMENT CODE HERE

// variables broken out into upper, lowercase, numbers or characters.
  var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  var lowerChar = "abcdefghijklmnopqrstuvwxyz"; 
  var numericalChar = "1234567890"; 
  var symbolChar= "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  


function generatePassword() {
  var password = "";
  var passwordChar ="";


  // creates user prompt to select password length
  var passwordLengthUser = prompt("How many characters would you like your password to be? Password must be between 8 to 128 characters.");
  passwordLengthUser = parseInt(passwordLengthUser);

  // if lenght selected is not between 8-128 characters
  if (passwordLengthUser < 8 || passwordLengthUser >128) {
    alert("Password lenght must be between 8 to 128 characters!");
    return "";
  }

  // Selection: ONLY uppercase letters 
  var upperCharSelection = confirm("Would you only like to have UPPERCASE letters?");

  if(upperCharSelection) {
    passwordChar += upperChar;
  }

  // Selection: ONLY lower case letters

  var lowerCharSelection = confirm("Would you only like to have LOWERCASE letters?");

  if(lowerCharSelection) {
    passwordChar += lowerChar;
  }

  // Selection: numbers in password
   var numbersCharSelection = confirm("Would you like to add NUMBERS to your password?");

   if(numbersCharSelection) {
     passwordChar += numericalChar;
   }

  //  Selection: special characters "!@#$%^&*()_+"
  var specialCharSelection = confirm ("Would you like to include the following:!#$%&'()*+,-./:;<=>?@[\]^_`{|}~ special characters?");

  if(specialCharSelection) {
    passwordChar += symbolChar;
  }

  //  create for loop to choose password characters
  for (var i = 0; i < passwordLengthUser; i++) {
    password = password + passwordChar.charAt(Math.floor(Math.random() * passwordChar.length));
  }
  
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

