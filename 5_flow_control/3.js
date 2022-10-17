function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('Please enter a number!')
    return
  }
  if (num % 2 === 0) {
  console.log('even');
} else {
  console.log('odd')
}
}

evenOrOdd('word')