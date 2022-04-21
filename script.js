// Assignment Code
const generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {
  const promptLength = prompt("What is your desired password length?");
  console.log(promptLength);

  const passwordLengthNum = parseInt(promptLength, 10);
  console.log("passwordLengthNum: " + passwordLengthNum);

  if (passwordLengthNum >= 8 && passwordLengthNum <= 128) {
    return passwordLengthNum;
  } else alert("please enter a valid password");
};

const getPasswordCriteria = () => {
  const lowercase = confirm("do you want lowercase in your password?");
  const uppercase = confirm("do you want uppercase in your password?");
  const numeric = confirm("do you want numbers in your password?");
  const specialCharacter = confirm(
    "do you want special characters in your password?"
  );

  const essentialsCriteria = [];

  if (lowercase) {
    essentialsCriteria.push("abcdefghijklmnopqrstuvwxyz");
  }

  if (uppercase) {
    essentialsCriteria.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }

  if (numeric) {
    essentialsCriteria.push("0123456789");
  }

  if (specialCharacter) {
    essentialsCriteria.push(" !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~");
  }

  return essentialsCriteria;
};

//create random password function
const createRandomPassword = (passwordLength, passwordCriteria) => {
  for (let i = 0; i < passwordLength; i += 1) {
    //select random categories from the array
    const randomCategoriesIndex =
      Math.floor[Math.random() * passwordCriteria.length];
    //get random categories
    const randomCategory = passwordCriteria[randomCategoriesIndex];
    //get random index
    const randomIndex = Math.floor(Math.random() * passwordCriteria.length);
    //get random character
    const randomCharacter = randomCategory.charAt(randomIndex);
    essentialsCriteria.push(randomCharacter);
  }
  return essentialsCriteria.join("");
};

// main function to generate the random password
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();
  console.log("passwordLegth: " + passwordLength);
  if (passwordLength) {
    // get the password criteria
    const passwordCriteria = getPasswordCriteria();
    if (passwordCriteria.length !== 0) {
      // create random password
      const password = createRandomPassword(passwordLength, passwordCriteria);
      return password;
    }
  }
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
