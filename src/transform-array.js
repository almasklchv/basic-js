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
  let newArr = arr;
  let controlSequence = '';
  let controlSequences = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
  ]

  for (let i = 0; i < arr.length; i++) {
    if (controlSequences.includes(arr[i])) {
      controlSequence = arr[i]
      if (controlSequence == controlSequences[0]) {
        newArr.splice(i, i+1);
      } else if (controlSequence == controlSequences[1]) {
        if (i != 0) {
          newArr.splice(i-1, i);
        } else {
          newArr.splice(i, i)
        }
       
      } else if (controlSequence == controlSequences[2]) {
        newArr[i] = newArr[i+1];
      } else if (controlSequence == controlSequences[3]) {
        if (i != 0) {
          newArr[i] = newArr[i-1];
        } else {
          newArr.splice(i, i)
        }
        
      }
    }
  }

  return newArr;
}

module.exports = {
  transform
};
