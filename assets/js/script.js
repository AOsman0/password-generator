// Assignment Code
const generateBtn = document.querySelector("#generate");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharacter = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

//main function to generate random password
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();

  if (passwordLength) {
    // calling password critera function
    const passwordCriteria = getPasswordCriteria();

    if (passwordCriteria.length === 0) {
      alert("please at least choose an option");
    } else {
      // create random password
      const randomPassword = createRandomPassword(
        passwordLength,
        passwordCriteria
      );

      return randomPassword;
    }
  }
};

//get password length function
const getPasswordLength = () => {
  const promptLength = prompt("What is your desired password length?");
  console.log(promptLength);

  const passwordLengthNum = parseInt(promptLength, 10);
  console.log("passwordLengthNum: " + passwordLengthNum);

  if (passwordLengthNum >= 8 && passwordLengthNum <= 128) {
    return passwordLengthNum;
  } else alert("please enter a valid password");
};

//get password criteria function
const getPasswordCriteria = () => {
  const lowercaseQuestion = confirm("do you want lowercase in your password?");
  const uppercaseQuestion = confirm("do you want uppercase in your password?");
  const numericQuestion = confirm("do you want numbers in your password?");
  const specialCharacterQuestion = confirm(
    "do you want special characters in your password?"
  );
  const essentialsCriteria = [];

  if (lowercaseQuestion) {
    essentialsCriteria.push(lowercase);
  }

  if (uppercaseQuestion) {
    essentialsCriteria.push(uppercase);
  }

  if (numericQuestion) {
    essentialsCriteria.push(numbers);
  }

  if (specialCharacterQuestion) {
    essentialsCriteria.push(specialCharacter);
  }

  return essentialsCriteria;
};

//create random password function
const createRandomPassword = (passwordLength, passwordCriteria) => {
  const passwordArray = [];
  for (let i = 0; i < passwordLength; i += 1) {
    //select random categories from the array
    const randomCategoriesIndex = Math.floor(
      Math.random() * passwordCriteria.length
    );
    //get random categories
    const randomCategory = passwordCriteria[randomCategoriesIndex];
    //get random index
    const randomIndex = Math.floor(Math.random() * randomCategory.length);
    console.log("randomIndex", randomIndex);
    //get random character
    const randomCharacter = randomCategory.charAt(randomIndex);
    passwordArray.push(randomCharacter);
  }
  return passwordArray.join("");
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
