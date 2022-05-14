// Assignment code here
var confirmNumber;
var confirmCharacter;
var confirmUpperCase;
var confirmLowerCase;

character = ["!", "@", "#", "$", "%", "^", "&", "*", ];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space =[];

var select;
//uppercase letters
var caps = function (x) {
  return x.toUpperCase();
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
// Beginning of prompts
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

  if (!enter) {
    alert ("This is a required step!");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You can only have between 8 and 128 characters."));
  } else {
    // the 4 different options
    confirmNumber = confirm("Include Numbers?");
    confirmCharacter = confirm("Include Special Characters?");
    confirmUpperCase = confirm("Include UPPERCASE Letters?");
    confirmLowerCase = confirm("Include lowercase Letters?");
  };
//Beginning of outputs depending on user settings
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
