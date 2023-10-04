const removeFromArray = function() {

    const argumentArray = arguments[0];

    for (i = 1; i < arguments.length; i++){
        // const argumentValue = arguments[i]
        //console.log(argumentValue);// check the argument value
        const argumentIndex = arguments[0].indexOf(arguments[i]);
        //console.log(argumentIndex)// check the index

        //check if the argument is not existing
        if (argumentIndex !== -1) { // -1 represent not found
            const argumentArray = arguments[0].splice(argumentIndex, 1);
        }
        
    }
    
    return argumentArray;

};

// Do not edit below this line
module.exports = removeFromArray;
