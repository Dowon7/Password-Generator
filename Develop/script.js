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

// variable for uppercase option
alphacaps = alpha.map(toUpperCase);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
// Beginning of prompts
  select = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

  if (!select) {
    alert ("This is a required step!");
  } else if (select < 8 || select > 128) {
    select = parseInt(prompt("You can only have between 8 and 128 characters."));
  } else {
    // the 4 different options
    confirmNumber = confirm("Include Numbers?");
   
    confirmCharacter = confirm("Include Special Characters?");
    
    confirmUpperCase = confirm("Include UPPERCASE Letters?");
   
    confirmLowerCase = confirm("Include lowercase Letters?");
  };
  
  //Beginning of outputs depending on user settings

  // if no options
  if (!confirmLowerCase && !confirmCharacter && !confirmNumber && !confirmUpperCase) {
    select = alert ("Please choose a(n) option(s)!");
  } 
  
  // all options
  else if (confirmLowerCase && confirmCharacter && confirmNumber && confirmUpperCase) {
    select = character.concat(number, alpha, alphacaps);
  }

  // selection of 3 options
  else if (confirmCharacter && confirmLowerCase && confirmUpperCase) {
    select = character.concat(alpha, alphacaps);
  }
  
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    select = character.concat(number, alphacaps);
  }
  
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    select = character.concat(number, alpha);
  }
  
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    select = character.concat(alpha, alphacaps);  
  }
  //  selection of 2 options
  else if (confirmLowercase && confirmNumber) {
    select = alpha.concat(number);
  } 

  else if (confirmLowercase && confirmUppercase) {
    select = alpha.concat(alphacaps);
  } 
 
  else if (confirmNumber && confirmUppercase) {
    select = number.concat(alphacaps);
  }
  
  else if (confirmCharacter && confirmNumber) {
    select = character.concat(number);
  }
  
  else if (confirmCharacter && confirmLowercase) {
    select = character.concat(alpha);
  } 
  
  else if (confirmCharacter && confirmUppercase) {
    select = character.concat(alphacaps);
  }
 
  //  selection of 1 option
  else if (confirmCharacter) {
    select = character;
  }

  else if (confirmLowerCase) {
    select = alpha;
  }

  else if (confirmNumber) {
    select = number;
  }

  else if (confirmUpperCase) {
    select = space.concat(alphacaps);
  }

  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);