// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function isLetter(character) {
  const toMatch = /[a-zA-Z]/;
  return character.match(toMatch);
}

function anagrams(stringA, stringB) {
  const letters = new Map();
  for(const char of stringA) {
    if(isLetter(char))
      letters.set(char.toLowerCase(), letters.has(char.toLowerCase()) ? letters.get(char.toLowerCase()) + 1 : 1);
  }
  for(const char of stringB) {
    if (isLetter(char)) {
      if (letters.has(char.toLowerCase())) {
        const newValue = letters.get(char.toLowerCase()) - 1;
        if (newValue <= 0) {
          letters.delete(char.toLowerCase());
        } else {
          letters.set(newValue);
        }
      } else {
        return false;
      }
    }
  }
  return letters.size > 0;  
}

module.exports = anagrams;
