const fibonacci = function(num) {
  let n1 = 0 , n2 = 1 ,sum;

  for (i = 0; i < num ; i++) {
      // so sum gets a new value sum = 1 + 1 = 2
     sum = n1 + n2; // get the total sum = 1
     n1 = n2; // n1 becomes 1
     n2 = sum; // n2 becomes 1

     // then loop to the top
  }
 
  return num < 0 ? 'OOPS' : n1;
 
};

// Do not edit below this line
module.exports = fibonacci;
