// P1
// Create two arrays
let fruits = ['apple', 'orange'];
let vegetables = ['carrot', 'broccoli'];

// Concatenate them into a single array called food
let food = fruits.concat(vegetables);

console.log(food); // Displays: ['apple', 'orange', 'carrot', 'broccoli']


// P2
// Create an array of words
let fruits2 = ['apple', 'orange', 'banana'];

// Check if 'grapes' is in the array using indexOf
let result = fruits2.indexOf('grapes') !== -1;

console.log(result); // Displays: false (because 'grapes' is not in the array)


//P3
// Create a Date object
let currentDate = new Date();

// Display the current year in the console
console.log(currentDate.getFullYear()); // Displays the current year


//P4
// Create a Date object
let currentDate2 = new Date();

// Add 5 days to the current date
currentDate2.setDate(currentDate2.getDate() + 5);

// Display the new date in the console
console.log(currentDate2);


//P5
// Create two Date objects representing two points in time
let timestamp1 = new Date('2020-01-07').getTime();
let timestamp2 = new Date('2020-08-16').getTime();

// Calculate the difference between them in milliseconds
let differenceInMilliseconds = timestamp2 - timestamp1;

// Display the result in the console
console.log(differenceInMilliseconds);


//P6
// Create an object with information about yourself
let person = { name: 'John Mrn', age: 32, city: 'Milton Keynes' };

// Display the object in the console
console.log(person);


//P7
// Modify the age of the person from the previously created object
person.age = 25;

// Display the modified object in the console
console.log(person);


//P8
// Create an array of objects representing books
let books = [
    { title: 'Book1', author: 'Author1', yearPublished: 2005 },
    { title: 'Book2', author: 'Author2', yearPublished: 1997 }
  ];
  
// Use an array method to add another object representing a book
books.push({ title: 'Book3', author: 'Author3', yearPublished: 2023 });

// Display the array of books in the console
console.log(books);