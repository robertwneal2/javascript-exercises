function add(num1, num2) {
  return (num1 + num2)
};

const subtract = function(num1, num2) {
  return (num1 - num2)
};

const sum = function(array) {
	let sum = 0
  for (let num of array) {
    sum += num
  }
  return sum
};

const multiply = function(array) {
  let output = 1
  for (num of array) {
    output *= num
  }
  return output
};

const power = function(num, exp) {
	return num**exp
};

const factorial = function(num) {
  let output = 1
  if (num <= 1) {
    return 1
  }
  for (i = num; i >= 1; i--) {
    output *= i
  }
  return output
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
