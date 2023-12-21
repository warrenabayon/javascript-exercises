const add = function(n1 , n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current);
};

const power = function(n1, n2) {
	return Math.pow(n1, n2);
};

const factorial = function(num) {
  if (num < 0) 
    return -1;
  else if (num == 0) 
  return 1;
  else {
  return (num * factorial(num - 1));
  }
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
