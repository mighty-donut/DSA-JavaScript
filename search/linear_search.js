// Linear Search
// Time complexity: O(N)
// Auxiliary Space: O(1)


// 1
const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];

let counter = 0;

function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    counter += 1;
    if (array[i] === value) {
      // returns index number
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 8)); // 3
console.log(counter); // 4  
console.log(linearSearch(array, 11)); // 10
console.log(counter); // 15 



// 2
// recursion
const arraySource = [1, 4, 5, 8, 5, 7, 2, 11];

function linearSearchRecursive(arr, size, key) {
  if (size == 0) {
    return -1;
  } else if (arr[size - 1] == key) {
    // Return the index of found key.
    return size - 1;
  } else {
    let found = linearSearchRecursive(arr, size - 1, key);
    return found;
  }
};

console.log(linearSearchRecursive(arraySource, 8, 4)); // 1











