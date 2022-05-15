// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables for options
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Special 
character = ["!", "#", "$", "%", "&", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", " ^ ", "_", "~"];
// Numbers
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Letters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Choices declared outside the if statement so they can be concatenated upon condition
var select;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};

// Uppercase stuff
alphaCaps = alpha.map(toUpper);



// Add event listener to generate button
generateBtn.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// The function for password making
function generatePassword() {
    // Input prompt
    enter = parseInt(prompt("Please choose your password to have between 8 and 128 characters"));

    if (!enter) {
        alert("Please choose a valid number");
    } 
    
    else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } 
    
    else {
        confirmNumber = confirm("Include numbers?");
        confirmCharacter = confirm("Include special characters?");
        confirmUppercase = confirm("Include UPPERCASE letters?");
        confirmLowercase = confirm("Include lowercase letters?");
    };

    // If no options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        select = alert("Please select at least one option!");
    }

    // If all options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        select = character.concat(number, alpha, alphaCaps);
    }
    
    // 3 options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        select = character.concat(number, alphaCaps);
    }
    
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        select = character.concat(number, alpha);
    }
    
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        select = character.concat(alpha, alphaCaps);
    }
    
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        select = number.concat(alpha, alphaCaps);
    }
    
    // 2 options
    else if (confirmCharacter && confirmNumber) {
        select = character.concat(number);

    } 
    
    else if (confirmCharacter && confirmLowercase) {
        select = character.concat(alpha);

    } 
    
    else if (confirmCharacter && confirmUppercase) {
        select = character.concat(alphaCaps);
    }
    
    else if (confirmLowercase && confirmNumber) {
        select = alpha.concat(number);

    } 
    
    else if (confirmLowercase && confirmUppercase) {
        select = alpha.concat(alphaCaps);

    } 
    
    else if (confirmNumber && confirmUppercase) {
        select = number.concat(alphaCaps);
    }
    // Only 1 options
    else if (confirmCharacter) {
        select = character;
    }
    
    else if (confirmNumber) {
        select = number;
    }
    
    else if (confirmLowercase) {
        select = alpha;
    }
    
    else if (confirmUppercase) {
        select = alphaCaps;
    };

    var password = [];

  //  code for random variable selection
    for (var i = 0; i < enter; i++) {
        var pickChoices = select[Math.floor(Math.random() * select.length)];
        password.push(pickChoices);
    }
  
    // combines password stuff into a string
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

// puts password into textbox
function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}