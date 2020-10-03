// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// My solution, without replace
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

// Other solution

// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
//   return str
//     .replace(/[^\w]/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('');
// }


// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//
//   return true;
// }
//
// function buildCharMap(str) {
//   const charMap = {};
//
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//
//   return charMap;
// }

module.exports = anagrams;
