const sumAll = function(startNumber, endNumber) {
    let firstNum = startNumber;
    let secondNumber = endNumber;
    let sum = 0;

    // console.log(typeof(firstNum));

   

    if (startNumber < 0 || endNumber < 0 
                        || typeof(firstNum) !== 'number' 
                        || typeof(secondNumber) !== 'number') {
        sum = 'ERROR';
        
    } else {

        if (startNumber > endNumber) {
        firstNum = endNumber;
        secondNumber = startNumber;
        }

        for (i = firstNum; i <= secondNumber; i++) {
            
            sum += i;
        
                            
        }         

    }

    return sum;


};

// Do not edit below this line
module.exports = sumAll;
