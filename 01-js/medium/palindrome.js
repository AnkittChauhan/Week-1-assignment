/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase()

  const length = str.length;
  const middle = Math.floor(length / 2);

  for (let i = 0; i < middle; i++) {
    if (str[i] !== str[length - 1 - i]) {
      return false;
    }
  }

  return true;
}


const ans = isPalindrome("Ankit")
console.log(ans);

// module.exports = isPalindrome;
