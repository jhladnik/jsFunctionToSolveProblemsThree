// A password is considered strong if the below conditions are all met:

// It has at least 6 characters and at most 20 characters.
// It contains at least one lowercase letter, at least one uppercase letter, and at least one digit.
// It does not contain three repeating characters in a row (i.e., "Baaabb0" is weak, but "Baaba0" is strong).
// Given a string password, return the minimum number of steps required to make password strong. if password is already strong, return 0.

// In one step, you can:

// Insert one character to password,
// Delete one character from password, or
// Replace one character of password with another character.

var strongPasswordChecker = function(password) {
    let missingTypes = 3;
    if (password.match(/[a-z]/)) missingTypes--;
    if (password.match(/[A-Z]/)) missingTypes--;
    if (password.match(/[0-9]/)) missingTypes--;

    let repeatingChars = 0;
    let i = 0;
    while (i < password.length) {
    let j = i;
    while (password[j] === password[i] && j < password.length) {
        j++;
    }
    
    repeatingChars += Math.floor((j - i) / 3);
        i = j;
    }

    if (password.length < 6) {
        return Math.max(missingTypes, 6 - password.length);
    } else if (password.length <= 20) {
        return Math.max(missingTypes, repeatingChars);
    } else {
        let deleteCount = password.length - 20;
        repeatingChars -= Math.min(deleteCount, Math.floor(repeatingChars / 3));

    let replaceCount = 0;
    let missingCount = Math.max(missingTypes, repeatingChars);
    for (let i = 0; i < password.length && missingCount > 0; i++) {
        if (password[i].match(/[a-z]/) && !(password[i - 1] === password[i] || password[i +     1] === password[i])) {
    password = password.slice(0, i) + 'a' + password.slice(i + 1);
    missingCount--;
    replaceCount++;
        } else if (password[i].match(/[A-Z]/) && !(password[i - 1] === password[i] || password[i + 1] === password[i])) {
        password = password.slice(0, i) + 'A' + password.slice(i + 1);
    missingCount--;
    replaceCount++;
        } else if (password[i].match(/[0-9]/) && !(password[i - 1] === password[i] || password[i + 1] === password[i])) {
      password = password.slice(0, i) + '1' + password.slice(i + 1);
      missingCount--;
      replaceCount++;
      }
  }

  let insertCount = 0;
  for (let i = 0; i < password.length && missingCount > 0; i++) {
    if (password[i] === '.') {
      password = password.slice(0, i) + 'a.' + password.slice(i);
      missingCount--;
      insertCount++;
    } else if (password[i] === '!') {
      password = password.slice(0, i) + 'A!' + password.slice(i);
      missingCount--;
      insertCount++;
    }
  }

  return deleteCount + Math.max(missingCount, repeatingChars) + replaceCount + insertCount;

}};