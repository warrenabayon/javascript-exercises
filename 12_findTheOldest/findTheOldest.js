const findTheOldest = function(array) {
  for (let key in array) { // check the missing and add it
    'yearOfDeath' in array[key] === false ? array[key].yearOfDeath = new Date().getFullYear() : array;
  }

  // console.log(array); //check if its added
  
  const getAge = array.sort((a , b) => {
    
    const n1 = a.yearOfDeath - a.yearOfBirth;
    const n2 = b.yearOfDeath - b.yearOfBirth;
    return n1 > n2 ? -1 : 1;
  });

 return getAge[0];


};

// Do not edit below this line
module.exports = findTheOldest;
