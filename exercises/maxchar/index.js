// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const occurrencies = {};
  for(const char of str) {
    occurrencies[char] = occurrencies[char] ? occurrencies[char] + 1 : 1;
  }
  let max = -Infinity;
  let maxKey;
  for(const prop in occurrencies) {
    if (occurrencies[prop] > max) {
      max = occurrencies[prop];
      maxKey = prop;
    }
  }
  return maxKey;
}

module.exports = maxChar;
