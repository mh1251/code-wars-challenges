function isInteresting(number, awesomePhrases) {
  function notTooShort(number) {
    return number >= 100;
  }

  function followedByAllZeros(digits) {
    let nonZeroDigits = digits.filter(digit => { return digit != 0 });
    return nonZeroDigits.length == 1 && nonZeroDigits[0] == digits[0];
  }

  function everyDigitSame(digits) {
    return digits.every(x => x === digits[0])
  }


  function decrementingDigits(digits) {
    let sortedDigitsDecrementing = [...digits].sort((a, b) => b - a)
    return sortedDigitsDecrementing.join() == digits.join()
  }

  function incrementingDigits(digits) {
    let sortedDigitsIncrementing = [...digits].sort((a, b) => a - b);
    if (sortedDigitsIncrementing[0] == 0) {
      sortedDigitsIncrementing.shift();
      sortedDigitsIncrementing.push(0)
    }
    return sortedDigitsIncrementing.join() == digits.join()
  }

  function isPalindrome(digits) {
    for (let i = 0; i < Math.floor(digits.length / 2); i++) {
      if (digits[i] != digits[digits.length - i - 1]) {
        return false;
      }
    }
    return true;
  }

  function isAwesomePhrase(number, awesomePhrases) {
    return awesomePhrases.indexOf(number) != -1;
  }

  function numberIsInteresting(number, awesomePhrases) {
    let digits = number.toString().split('').map(function (digit) { return +digit });

    return notTooShort(number)
      && (followedByAllZeros(digits)
        || everyDigitSame(digits)
        || incrementingDigits(digits)
        || decrementingDigits(digits)
        || isPalindrome(digits)
        || isAwesomePhrase(number, awesomePhrases));
  }



  if (numberIsInteresting(number, awesomePhrases)) {
    return 2;
  } else if (numberIsInteresting(number + 1, awesomePhrases) || numberIsInteresting(number + 2, awesomePhrases)) {
    return 1;
  } else {
    return 0;
  }

}

isInteresting(1231, [123, 456])
