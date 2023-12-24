const fibonacci = function(num) {
  let n1 = 0, n2 = 1, sum;
  
  for (i = 0 ; i < parseInt(num); i++) {
    
    sum = n1 + n2; //get the sum = 1
    n1 =  n2; // n1 = 1 //so on loop this wil become sum = 1 + 1 = 2
    n2 = sum; // here n2 becomes 2
  
    // console.log(n1);
  }
  

  return parseInt(num) < 0 ? 'OOPS' : n1 ;
};

// Do not edit below this line
module.exports = fibonacci;
