// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solutions
// function reverse1(str) {
//   const length = str.length;
//   return str.split('').reduceRight((acc, curr) => {
//     return [...acc, curr];
//   }, []).join('');
// }

// function reverse2(str) {
//   return str.split('').reverse().join('');
// }

function reverse(str) {
  const chars = str.split('');
  let start = 0, end = chars.length - 1;
  while(start < end) {
    [chars[start], chars[end]] = [chars[end], chars[start]];
    start++;
    end--;
  }
  return chars.join('');
}

module.exports = reverse;
