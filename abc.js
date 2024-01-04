// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Accessing array elements by index
console.log(numbers[0]); // Output: 1

// Modifying array elements
numbers[2] = 10;
console.log(numbers); // Output: [1, 2, 10, 4, 5]

// Adding elements to the end of an array
numbers.push(6);
console.log(numbers); // Output: [1, 2, 10, 4, 5, 6]

// Removing the last element from an array
numbers.pop();
console.log(numbers); // Output: [1, 2, 10, 4, 5]

// Adding elements to the beginning of an array
numbers.unshift(0);
console.log(numbers); // Output: [0, 1, 2, 10, 4, 5]

// Removing the first element from an array
numbers.shift();
console.log(numbers); // Output: [1, 2, 10, 4, 5]

// Finding the index of an element in an array
const index = numbers.indexOf(10);
console.log(index); // Output: 2

// Removing elements from a specific index
numbers.splice(index, 1);
console.log(numbers); // Output: [1, 2, 4, 5]

// Concatenating arrays
const moreNumbers = [6, 7, 8];
const combined = numbers.concat(moreNumbers);
console.log(combined); // Output: [1, 2, 4, 5, 6, 7, 8]

// Iterating over array elements
numbers.forEach((number) => {
  console.log(number);
});
// Output:
// 1
// 2
// 4
// 5