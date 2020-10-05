// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let numVowels = 0;
  const isVowel = /[aeiou]/;
  for(const char of str.toLowerCase()) {
    if (char.match(isVowel)) {
      numVowels++;
    }
  }
  return numVowels;
}

// Other solution
// using .includes on an array with all the vowels. We still
// transform the string to lower case


// Better solution using my same idea

// function vowels(str) {
   // I can just match directly the entire string instead of doing character
   // by character
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }


module.exports = vowels;
