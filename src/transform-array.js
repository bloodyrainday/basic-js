const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let arr1 = arr;
  if (Array.isArray(arr)) {
    if (arr.includes('--double-next')) {
      arr[arr.indexOf('--double-next')] = arr[arr.indexOf('--double-next') + 1];
      return arr.sort();
      
    } else if (arr.includes('--discard-prev')) {
      if (arr.indexOf('--discard-prev') == 0) {
        arr.shift();
        return arr;
    } else {
       arr.splice((arr.indexOf('--discard-prev') - 1), (arr.indexOf('--discard-prev')- 1)); 
        return arr;
    }
    }
      else if (arr.includes('--double-prev')) {
          arr.shift();
          return arr;
      }
      else if (arr.includes('undefined')) {
          arr.splice((arr.indexOf('undefined')));
          return arr;
      }
  } else if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  } 
  return arr1;
}

module.exports = {
  transform
};
