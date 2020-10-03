// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// My solution
function chunk(array, size) {
  let start = 0;
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if ((i + 1) % size === 0 ) {
      result.push(array.slice(start, i + 1));
      start = i + 1
    }
  }
  if (start < array.length)
    result.push(array.slice(start));
  return result;
}

// Other solutions
// Better than mine, it doesn't need to slice anything
// function chunk(array, size) {
//   const chunked = [];
//   for(const element of array) {
//     const last = chunked[chunked.length - 1];
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else last.push(element);
//   }
//   return chunked;
// }

// Similar to mine, I didn't have to check for where I was in the array
// I could just increment the index by size every time
// function chunk(array, size) {
//   const chunked = [];
//   let index = 0;
//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size));
//     index += size;
//   }
//   return chunked;
// }

module.exports = chunk;
