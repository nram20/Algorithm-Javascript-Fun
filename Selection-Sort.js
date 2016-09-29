/** Selection Sort in JavaScript 

Use Cases: 

- Limited use cases due to it's time inefficiency.

- One advantage is that it requires only n "write" operations. 
- If we have a system where write operations are extremely expensive and read operations are not, then selection sort could be ideal.
- One such scenario would be if we are sorting a file in-place on flash memory.
- This is a rare case and generally Selection Sort will not be ideal, but it's worth considering for smaller arrays or when memory writes are more expensive than reads.
- In day-to-day JavaScript coding, the Array.prototype.sort() method will be a more efficient and readable option.



Psuedo-Code:

Step 1: Assume Number in first position is the smallest number. Compare this number to number at position 2. 

Step 2: If number at first position is still the minimum, compare first position to third position. If second number was smaller, set current minimum to second number, and compare second number to third number.

Step 3: After completing first pass through array, swap the minimum with position 1. 

Step 4: Begin Step 1 from position 2 (and when minimum is found from second position to n-th position, swap minimum into second position).


JavaScript Implementation:
**/

function selectionSort(array) {
  for (let i = 0; i < array.length -1; i++) {
    // Number of Passes 
    let currentMin = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[currentMin]) {
        currentMin = j
      }

      if (currentMin != i) {
        // After each pass, if the current min number is not equal to initial min number, swap the positions
        let temp = array[i];
        array[i] = array[currentMin];
        array[currentMin] = temp;
      }
    }
  }
  return array
}

// Just for Fun: 
// Sort the following array of Persons in descending order of ‘age’ using Selection Sort. 
var persons = [ 
  { 
  "name": "john", 
  "age": "23" 
  }, 
  { 
  "name": "harry", 
  "age": "21" 
  }, 
  { 
  "name": "jack", 
  "age": "25" 
  } 
];

function selectionSort(persons) {
  for (let i = 0; i < persons.length -1; i++) {
    // Number of Passes 
    let currentMin = i;

    for (let j = i + 1; j < persons.length; j++) {
      if (persons[j].age > persons[currentMin].age) {
        currentMin = j
      }

      if (currentMin != i) {
        // After each pass, if the current min number is not equal to initial min number, swap the positions
        let temp = persons[i];
        persons[i] = persons[currentMin];
        persons[currentMin] = temp;
      }
    }
  }
  return persons
}




