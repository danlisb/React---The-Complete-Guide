/*
// function
function printMyName(name) {
  console.log(name);
}
printMyName("Daniel");
*/

// arrow function (we dont need to worry about 'this' keyword)
// ex1
const printMyName = (name) => {
  console.log(name);
};
printMyName("Rafael");

// ex2
const printMyNameAndAge = (name, age) => {
  console.log(name, age);
};
printMyNameAndAge("Daniel", 20);

// ex3
const multiplyBig = (bigNumber) => {
  console.log(bigNumber * 2);
};
multiplyBig(4);

// shortest arrow function
const multiply = number => number * 2;
console.log(multiply(2));
