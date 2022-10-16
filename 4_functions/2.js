function fullName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let f_name = fullName('What is your first name? ');
let l_name = fullName('What is your last name? ');
console.log(`Hello, ${f_name} ${l_name}!`)