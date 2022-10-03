// Assignment Code
var generateBtn = document.querySelector("#generate"); //This line of code locates our button using the generate id

//This is our main function that will generate our password 
function generatePassword(){
  //Lines 9-12 initiates our variables and our arrays with our special characters
  var message = "";
  var passwordBuilder = "";
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  //Boolean variables used to verify if the user wants this type of character. All will start as false.
  var ifLowerCase = false;
  var ifSpecialCharacters = false;
  var ifUpperCase = false;
  var ifNumbers = false

  //Display a prompt so the user can enter length of password. If the password is less than 8 characters or more than 128 the user is prompted to try again.
  var numOfCharacters = prompt("Please enter a number between 8 and 128 for password length"); //prompt gets user input
  if (numOfCharacters < 8){
    alert("You entered " + numOfCharacters + "." + "\nPlease select a number equal to or greater than 8.");
    return "Click Generate Password";
  }
  if (numOfCharacters > 128){
    alert("You entered " + numOfCharacters + "." + "\nPlease select a number equal to or less than 128.");
    return "Click Generate Password";
  }
  message = message.concat("Length: " + numOfCharacters) //confirms length

  //Confirms what kind of characters the user wants. Displays a message at the end confirming selection made.
  if(confirm("Include lowercase characters? Click 'Cancel' if no.") == true){
    ifLowerCase = true;
    message = message.concat("\nLowercase letters selected.");
  }
  else{
    ifLowerCase = false;
    message = message.concat("\nLowercase letters NOT selected.");
  }
  if (confirm("Include special characters? Click 'Cancel' if no.") == true){
    ifSpecialCharacters = true;
    message = message.concat("\nSpecial characters selected.");
  }
  else{
    ifSpecialCharacters = false;
    message = message.concat("\nSpecial characters NOT selected.");
  }
  if (confirm("Include uppercase letters? Click 'Cancel' if no.") == true){
    ifUpperCase = true;
    message = message.concat("\nUpper case letters selected.");
  }
  else{
    ifUpperCase = false;
    message = message.concat("\nUppercase letters NOT selected.");
  }
  if (confirm("Include numbers? Click 'Cancel' if no.") == true){
    ifNumbers = true;
    message = message.concat("\nNumbers selected.");
  }
  else{
    ifNumbers = false;
    message = message.concat("\nLNumbers NOT selected.");
  }

  alert(message); //Displays a message with confirmation of length and character selection

 //"for" loop to generate our password. Based on password length user chooses/
 for (var i = 0; i < numOfCharacters; i++){
    var typeOfCharacter = Math.floor(Math.random() * 4); //Number bewteen 0 and 3 to randomize what type of character is added
    //"if" statement to verify at least one type of character was selected. A message is displayed if not.
    if ((ifLowerCase == false) && (ifSpecialCharacters == false) && (ifUpperCase == false) && (ifNumbers == false)){
      alert("Please select AT LEAST one type of character.");
      return "Click Generate Password";
    }
    //"switch" statment takes the random number created to randomly add a type of character. 0 = lowercase letters. 1 = special characters. 2 = uppercase letters. 3 = numbers.
    switch (typeOfCharacter){
      case 0:
        if (ifLowerCase == true){ //checks to see if the user selected this type of character
          var lowerIndex = Math.floor(Math.random() * lowerCase.length); //gets a random character from the "lowercase" array
          var getText = lowerCase[lowerIndex]; //stores the random character in a variable
          passwordBuilder = passwordBuilder.concat(getText);//adds the character to the password
        }else if (ifLowerCase == false){ //if the user did not want this type of character nothing is added; it subtracts 1 from the loop counter so it only counts to when a character is added
          i--;
        }
          break; //breaks out of the switch and to the next iteration of our loop
      //Following cases follow the same logic
      case 1:
        if (ifSpecialCharacters == true){
          var specialIndex = Math.floor(Math.random() * specialCharacters.length);
          var getText = specialCharacters[specialIndex];
          passwordBuilder = passwordBuilder.concat(getText);
        }else if (ifSpecialCharacters == false){
          i--;
        }
        break;
      case 2:
        if (ifUpperCase == true){
          var upperIndex = Math.floor(Math.random() * upperCase.length);
          var getText = upperCase[upperIndex];
          passwordBuilder = passwordBuilder.concat(getText);
        }else if (ifUpperCase == false){
          i--;
        }
        break;
      case 3:
        if (ifNumbers == true){
          var numIndex = Math.floor(Math.random() * numbers.length);
          var getText = numbers[numIndex];
          passwordBuilder = passwordBuilder.concat(getText);
        } else if (ifNumbers == false){
          i--;
        }
        break;
      
       
    }
    }
    return passwordBuilder; //return the password after the loop is finished
}


//This function gets the generated password and uses it as text
function writePassword(){
    var password = generatePassword(); //Calls the generate password function and stores it in the password variable
    var passwordText = document.querySelector("#password"); //Locates the text area based on the id of password

    passwordText.value = password; //Populates the text area by storing what variables that are in the password in the located passwordText variable
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //Use eventListener function on the button, calls writePassword function on "click"