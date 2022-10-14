let num = 4936
let ones = num % 10
console.log(`${ones} is in the ones place.`)

num = (num - ones) / 10
let tens = num % 10
console.log(`${tens} is in the tens place.`)

num = (num - tens) / 10
let hundreds = num % 10
console.log(`${hundreds} is in the hundreds place.`)

num = (num - hundreds) / 10
let thousands = num % 10
console.log(`${thousands} is in the thousands place.`)