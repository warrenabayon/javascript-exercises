const reverseString = function(textInput) {

    /*
    return textInput.split('').reverse().join(''); /// method 1
    */

    //method 2
    let reverseText = '';

    for (i = textInput.length - 1; i >= 0; i--){
        reverseText += textInput[i];
    }

    return reverseText; 

}

// Do not edit below this line
module.exports = reverseString;
