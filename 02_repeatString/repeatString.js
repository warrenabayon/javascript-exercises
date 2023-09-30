const repeatString = function(greetings ='', numRepeat) {

let addGreet = '';

 if ( numRepeat < 0) {
    addGreet = 'ERROR';
} else {
    for (i = 0; i < numRepeat; i++){   
    addGreet += greetings;    
    }
}


        
                           
return addGreet;

}

// Do not edit below this line
module.exports = repeatString;


