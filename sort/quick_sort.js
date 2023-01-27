// quick sort
// divide and conquer algorithm

// worst scenario O(n2) if array is unsorted, unstable
// average O(n log n)

const arrSource = [2, 4, 5, 7, 1, 2, 3, 6];

// 1
// recursion
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  // finding mid point
  const mid = Math.floor(arr.length / 2);

  // left subarray
  const left = arr.filter((val) => val < arr[mid]);

  // right subarray
  const right = arr.filter((val) => val > arr[mid]);

  // returns new array [ ...left, mid, ...right ]
  return [...quickSort(left), arr[mid], ...quickSort(right)];
}

console.log(quickSort(arrSource)); // [1, 2, 3, 4, 5, 6, 7]


// 2
// “Quick Sort with Random Pivot”
function quickSortV2(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let min = 1;
  let max = arr.length - 1;
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  let pivot = arr[rand];
  const left = [];
  const right = [];
  arr.splice(arr.indexOf(pivot), 1);
  arr = [pivot].concat(arr);
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSortV2(left).concat(pivot, quickSortV2(right));
}

console.log(quickSortV2(arrSource)); //[1, 2, 2, 3, 4, 5, 6, 7]


// 3
// geeks for geeks version
// https://www.geeksforgeeks.org/quick-sort/?ref=gcse

// A utility function to swap two elements
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
   array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
function partition(arr, low, high) {
  // pivot
  let pivot = arr[high];

  // Index of smaller element and
  // indicates the right position
  // of pivot found so far
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    // If current element is smaller
    // than the pivot
    if (arr[j] < pivot) {
      // Increment index of
      // smaller element
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
}

/* The main function that implements QuickSort
          arr[] --> Array to be sorted,
          low --> Starting index,
          high --> Ending index
 */
function quickSort(arr, low, high) {
  if (low < high) {
    // pi is partitioning index, arr[p]
    // is now at right place
    let pi = partition(arr, low, high);

    // Separately sort elements before
    // partition and after partition
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

// Function to print an array
function printArray(arr, size) {
  for (let i = 0; i < size; i++) document.write(arr[i] + " ");

  document.write("<br>");
}

// Driver Code

let arr = [10, 7, 8, 9, 1, 5];
let n = arr.length;

quickSort(arr, 0, n - 1);
document.write("Sorted array: <br>");
printArray(arr, n);
