/**Write a function named first_non_repeating_letter that takes a string input,
 *  and returns the first character that is not repeated anywhere in the string.
 * As an added challenge, upper- and lowercase letters are considered the same character, 
 * but the function should return the correct case for the initial letter. 
 * For example, the input 'sTreSS' should return 'T'. */


function firstNonRepeatingLetter(s) {
    let str = s.toLowerCase();
    for(let i = 0; i < str.length; i++) {
      if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
        return s[i];
      }
    }
    return "";
  }

  console.log(firstNonRepeatingLetter('Hello world')) //H