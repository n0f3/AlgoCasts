// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome1(str) {
//   let start = 0, end = str.length - 1;
//   while (start < end) {
//     if (str[start] !== str[end]) {
//       return false;
//     }
//     start++;
//     end--;
//   }
//   return true;
// }


function palindrome(str) {
  const hasOdds = new Set();
  for(const char of str) {
    if(hasOdds.has(char)) {
      hasOdds.delete(char)
    } else {
      hasOdds.add(char)
    }
  }
  return hasOdds.size <= 1;
}

module.exports = palindrome;
