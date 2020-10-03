// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


    // no need for this, I can just slice
    //const [, ...rest] = word;
    //return [word[0].toUpperCase(), ...rest].join('');


// one liner
// function capitalize(str) {
//   return str.split(' ').map((word) => word[0].toUpperCase().concat(word.slice(1))).join(' ');
// }

// for loop
function capitalize(str) {
  let newString = '';
  let startWord = 0;
  for(let i = 0; i < str.length; ++i) {
    if (str[i] === ' ') {
      newString = newString.concat(str[startWord].toUpperCase(), str.slice(startWord + 1, i + 1));
      startWord = i + 1;
    }
  }
  return newString.concat(str[startWord].toUpperCase(), str.slice(startWord + 1));
}

module.exports = capitalize;
