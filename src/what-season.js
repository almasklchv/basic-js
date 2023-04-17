const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let month = date.getMonth();
  if (month == undefined) {
    return 'Unable to determine the time of year!'
  } else if ((month >= 11 && month <= 12) || (month >= 0 && month < 2)) {
    return 'winter';
  } else if (month >= 2 && month < 5) {
    return 'spring';
  } else if (month >= 5 && month < 8) {
    return 'summer';
  } else if (month >= 8 && month <= 10) {
    return 'autumn';
  } else {
    throw 'Invalid date!';
  }

}

module.exports = {
  getSeason
};
