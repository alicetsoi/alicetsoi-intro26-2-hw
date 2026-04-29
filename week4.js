//----------------------------------
// LESSON 4 ALGORITHMS
//----------------------------------

// ---------- QUESTION 1 ----------
// Create a function called 'convertTemp' that takes 1 temperatue parameter in celsius and return the temperature in Fahrenheit. Log both the input and output values

// EXAMPLE LOG:
//  console.log("Q1 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));
// EXAMPLE OUTPUT:
//  Q1 convertTemp: 0 32

// Call convertTemp with several different celsium temperatures

// PUT YOUR CODE HERE

function convertTemp(celsiusTemp) {
  return ((celsiusTemp * 9 / 5) + 32)
};

console.log("Q1 convertTemp: ", 0, convertTemp(0));
console.log("Q1 convertTemp: ", 25, convertTemp(25));
console.log("Q1 convertTemp: ", 30, convertTemp(30));


// ---------- QUESTION 2 ----------
// Create a function called 'reverseString' that takes 1 string parameter and returns the reverseString. Use a for loop. Log both the input and output values.

// EXAMPLE LOG:
//  console.log("Q2 reverseString: ", inputString, reverseString(inputString));
// EXAMPLE OUTPUT:
//  Q2 reverseString: HelloWorld dlroWolleH

// Call reverseString with several different strings. Make sure it works for an empty string.

// PUT YOUR CODE HERE
function reverseString(inputString) {
  let output = ""
  for (let i = inputString.length - 1; i >= 0; i--) {
    output += inputString[i];
  }
  return output
};
console.log("Q2 reverseString: ", "test string", reverseString("inputString"));
console.log("Q2 reverseString: ", " ", reverseString("inputString"));

// ---------- QUESTION 3 ----------
// Let's make a useful math problem - create a tip calculator! Create a function named tipCalculator that takes two parameters - billTotal and tipPercentage.  Return the total bill amount

// EXAMPLE LOG:
//  console.log("Q3 tipCalculator: ", tipCalculator (20, .20));
// EXAMPLE OUTPUT:
//  Q3 tipCalculator: 50 0.2 60

// PUT YOUR CODE HERE

function tipCalculator(billTotal, tipPercentage) {
  let tipAmount = (billTotal * tipPercentage);
  return (billTotal + tipAmount);
};
console.log("Q3 tipCalculator: ", 20, 0.2, tipCalculator(20, .20));

// Don't forget your console.logs!


// ---------- QUESTION 4 ----------
// Create two variables named 'num1' and 'num2' and assign them integer values. Create a function called 'multiplyThese' that takes 2 parameters and returns the product of the two parameters (as a reminder, a product is the resulting number when two numbers are multiplied together).

// EXAMPLE LOG:
//  console.log("Q4: ", num1, num2, multiplyThese(num1, num2));
// EXAMPLE OUTPUT: 
//  Q4 multiplyThese: 10 10 100

// PUT YOUR CODE HERE

let num1 = 5;
let num2 = 15;

function multiplyThese(num1, num2) {
  return num1 * num2
}
console.log("Q4: ", num1, num2, multiplyThese(num1, num2));

// ---------- QUESTION 5 ----------
// Create a function called 'getAverage' that takes 2 parameters and returns their average. NOTE: In some programming languages, the types of numbers you use in equations can effect what type of number (integer/floating point) you get as a result. We suggest using 2.0 instead of 2 as you're calculating the average.

// EXAMPLE LOG:
//  console.log("Q5 getAverage: ", 3, 6, getAverage(3.0, 6.0));
// EXAMPLE OUTPUT: 
//  Q5 getAverage: 3 6 4.5

// PUT YOUR CODE HERE

function getAverage(q51, q52) {
  return ((q51 + q52) / 2)
}

console.log("Q5 getAverage: ", 3, 6, getAverage(3.0, 6.0));

// ---------- QUESTION 6 ----------
// Create a function named 'isPrime' that returns true or false based on whether the number is prime or not.
// Hint: To determine if a number is prime, you can check if it's divisible by any number from 2 up to the square root of the number. 0 and 1 are not prime numbers.
// Make sure you test several prime and non prime numbers along with 0 and 1.

// EXAMPLE LOG:
//  console.log("Q6 isPrime: ", number, isPrime(number));
// EXAMPLE OUTPUT: 
//  Q6 isPrime: 12 false

// PUT YOUR CODE HERE

function isPrime(number) {
  // if 0 or 1
  if (number <= 1)
    return false;

  // Only check divisors up to sqrt
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

console.log("Q6 isPrime: ", 15, isPrime(15));
console.log("Q6 isPrime: ", 0, isPrime(0));
console.log("Q6 isPrime: ", 1, isPrime(1));
console.log("Q6 isPrime: ", 3, isPrime(3));
console.log("Q6 isPrime: ", 173, isPrime(173));

// ---------- QUESTION 7 ----------
// Using the 'isPrime' function created in the previous question, create another function named 'getPrimesUpTo' that takes an integer as an input and returns an array of all primes up to and including the input number. 
// Be sure to include several test cases

// EXAMPLE LOG:
//  console.log("Q7 getPrimesUpTo: ", number, isPrime(number));
// EXAMPLE OUTPUT:
//  Q7 getPrimesUpTo: 13 [2,3,5,7,11,13]

// PUT YOUR CODE HERE

// collect numbers here
function getPrimesUpTo(int) {
  let q7Array = [];
  // find primes using isPrime 
  for (let i = 1; i <= int; i++) {
    if (isPrime(i))
      // push to array
      q7Array.push(i)
  }
  return q7Array;
}

console.log("Q7 getPrimesUpTo: ", 13, getPrimesUpTo(13));
console.log("Q7 getPrimesUpTo: ", 29, getPrimesUpTo(29));
console.log("Q7 getPrimesUpTo: ", 41, getPrimesUpTo(41));

// ---------- QUESTION 8 ----------
// Now, we're going to write several functions that calculate a student's grade.  
// First, write a function named 'calculateAverage' that takes an input array of scores and calculates a student's average based on those scores.
// Check all of the grades in the array and ignore any values that are not in the range 0 - 100.
// Also, make sure that an empty array or no valid values in the array do not result in an error (hint: make sure you aren't dividing by 0)

// EXAMPLE LOG:
//  console.log("Q8 calculateAverage: ", calculateAverage(scores));
// EXAMPLE OUTPUT:
//  Q8 calculateAverage: 85 // input array let scores = [90, 80, 85];

// PUT YOUR CODE HERE

function calculateAverage(scores) {
  // check for empty array
  if (scores.length === 0) {
    return console.log("Q8: Empty array");
  }
  else {
    function inRange(grade) {
      // filter out scores not in range, 
      return grade <= 100 && grade >= 0;
    }

    // put into new array 
    let filtered = scores.filter(inRange);
    // check for empty array again
    if (filtered.length === 0) {
      return console.log("Q8: Empty array");
    }

    // calculate average
    let sum = 0;
    filtered.forEach(function (element) {
      sum += element;

    });
    // print average
    return (sum / filtered.length);
  }
}
console.log("Q8 calculateAverage: ", calculateAverage([]));
console.log("Q8 calculateAverage: ", calculateAverage([120, 80, 85, 0]));
console.log("Q8 calculateAverage: ", calculateAverage([-15, 120]));

// ---------- QUESTION 9 ----------
// Now, create a function - getLetterGrade(average) - that takes a grade average and returns a letter grade based on the following scale. Make sure you test with several averages.
// A: 90–100
// B: 80–89
// C: 70–79
// D: 60–69
// F: below 60

// EXAMPLE LOG:
//  console.log("Q9 getLetterGrade: ", getLetterGrade(95));
// EXAMPLE OUTPUT:
//  Q9 getLetterGrade(95): A

// PUT YOUR CODE HERE
function getLetterGrade(grade) {
  if (grade >= 90) {
    return ("A")
  }
  else if (grade >= 80 && grade <= 89) {
    return ("B");
  }
  else if (grade >= 70 && grade <= 79) {
    return ("C");
  }
  else if (grade >= 60 && grade <= 69) {
    return ("D");
  }
  else {
    return ("F");
  }
}

console.log("Q9 getLetterGrade: ", getLetterGrade(95));
console.log("Q9 getLetterGrade: ", getLetterGrade(75));
console.log("Q9 getLetterGrade: ", getLetterGrade(59));

// ---------- QUESTION 10 ----------
// Create a 3rd function named - passed(letterGrade) - that returns true if a student's grade is A, B or C, false otherwise. Make sure you handle a value other than A,B,C,D or F passed in.

// EXAMPLE LOG:
//  console.log("Q10 passed('A'): ", passed('A'));
// EXAMPLE OUTPUT:
//  Q10 passed('A''): true

// PUT YOUR CODE HERE

function passed(grade) {
  // pass conditions
  if (grade === 'A' || grade === 'B' || grade === 'C') {
    return true;
  }
  // fail conditions
  else if (grade === 'D' || grade === 'F') {
    return false;
  }
  // all other conditions
  else {
    return false;
  }
}
console.log("Q10 passed('B'): ", passed('B'));
console.log("Q10 passed('D'): ", passed('D'));
console.log("Q10 passed('x'): ", passed('x'));

// ---------- QUESTION 11 ----------
// Create a function named printClassResult (className, student, scores) that utilizes all three functions to output information on a student.
// Print yes is they have passed and no if they did not.

// EXAMPLE LOG:
//  console.log("Q11: ", printClassResult ("History 101", "Jane Doe", [60, 70, 85, 87]));  
// EXAMPLE OUTPUT:
//  Q11: History 101 - Student: Jane Doe, Average: 75.5, Grade: C, Passed: yes

// PUT YOUR CODE HERE
printClassResult("History 101", "Jane Doe", [60, 70, 85, 87])

function printClassResult(className, student, scores) {
  calculateAverage(scores)
  // new variable to store results
  let calculatedAverage = (calculateAverage(scores))

  getLetterGrade(calculatedAverage)
  // new variable to store results
  let grade = getLetterGrade(calculatedAverage);

  passed(grade)
  // new variable to store results
  let final = passed(grade);

  // put it all together
  console.log(`Q11: ${className} - Student: ${student}, Average: ${calculatedAverage}, Grade: ${grade}, Passed: ${final}`)
}
// ---------- QUESTION 12 ----------
// Now, let's see how to use a callback. First, create a function that simulates pushing a button. Name the function buttonPushed and log the message "The button was pushed!" in the function.

// EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
//  buttonPushed();

// EXAMPLE OUTPUT: (we're using this function in the next question as well)
//  Q12, Q13: The button was pushed!

// PUT YOUR CODE HERE

function buttonPushed() {
  console.log("Q12, Q13: The button was pushed!")
}

buttonPushed();

// ---------- QUESTION 13 ----------
// Now, create a function called simulateButtonPush and pass the function created in question 12 to that function.

// EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
//  simulateButtonPush(buttonPushed);

// EXAMPLE OUTPUT: 
//  The button was pushed!

// PUT YOUR CODE HERE

function buttonPushed() {
  console.log("The button was pushed!");
}
function simulateButtonPush(callback) {
  callback();
}
simulateButtonPush(buttonPushed);