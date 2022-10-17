// Write a function that logs whether a number is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.

function numberRange(num) {

  if (num > 100) {
    console.log(`${num} is greater than 100.`);
  } else if (num >= 51 && num < 100) {
    console.log(`${num} is between 51 and 100.`);
  } else if (num < 51 && num >= 0) {
    console.log(`${num} is between 0 and 50.`);
  } else {
    console.log(`${num} is a negative number.`);
  }
}


numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);