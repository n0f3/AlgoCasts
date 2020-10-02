// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// My solution
function reverseInt(n) {
  const returnNumber = [];
  const numberString = n.toString();
  if (numberString[0] === '-') {
    returnNumber[0] = '-'
  } else {
    returnNumber[0] = '0'
  }
  for(let i = numberString.length - 1; i >= 0; i--) {
    if (numberString[i] === '0') continue;
    returnNumber.push(numberString[i]);
  }
  return parseInt(returnNumber.join(''), 10);
}

// More solutions
// Could use Math.sign which return 1 for positive or -1 for negative
// function reverseIn(n) {
//   const reversed = n.toString().split('').reverse().join('');
//   return parseInt(reversed) * Math.sign(n);
// }

module.exports = reverseInt;
