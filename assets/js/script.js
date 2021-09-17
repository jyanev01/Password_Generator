// Assignment code here




function generatePassword() {
  // prompt I choose a length of at least 8 characters and no more than 128 characters
  // 


  // possible values
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
  l            "abcdefghijklmnopqrstuvwxyz" "1234567890" "!@#$%^&*()_+";

  let password ="";

  //  create for loop to choose password characters
  for (var i = 0; i <= complexity; i++) {
    password = password + values.charAt(Math.floor(Math.random()*values.length ));
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
