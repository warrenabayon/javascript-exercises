const palindromes = function (str) {
  const re = /[\W_]/g
  const process = str.replace(re, '')
  .toLowerCase();
  const toCompare = process.split('')
        .reverse()
        .join('');
  return process === toCompare ? true : false;

};

// Do not edit below this line
module.exports = palindromes;
