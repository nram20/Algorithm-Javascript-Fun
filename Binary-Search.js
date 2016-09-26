// Check Sorted Array to See if it Contains Number & Return Index
// Time Complexity: O(log(N))


/* Psuedo-Code:

1. Set variables "min" = 0 and "max" = n-1 

2. Set our "current mid" variable to th = Math.floor(min + max / 2)

3. Stop and return index if array[guess] = target

4. If array[guess] < target, set min = guess + 1 and repeat

5. Otherwise, guess must be too high, so set max = guess -1

Things to check for - 
I. Clarify - Is the Array Sorted? 
II. Clarify - What should be returned if there's multiple occurences?
III. Handle - Array is empty
IV. Handle - Array does not contain target


*/

// JavaScript Code:

function binarySearch(arr, key) {
  let min = 0;
  let max = arr.length - 1;
  let mid;

  while (min <= max) {
    mid = Math.floor((min + max)/2, 10);
    if (arr[mid] < key) {
      min = mid + 1;
    } else if (arr[mid] > key) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// Testcases:
let testArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let emptyArr = [];
binarySearch(testArr, 8)  // Should return 7
binarySearch(testArr, 11) // Should return -1
binarySearch(emptyArr, 1) // Should return -1


// Slight Performance Improvement Using Right Shift Bitwise Operator:

function binarySearch(arr, key) {
  let min = 0;
  let max = arr.length - 1;
  let mid;

  while (min <= max) {
    mid = ((min + max) >> 1);
    if (arr[mid] < key) {
      min = mid + 1;
    } else if (arr[mid] > key) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}













