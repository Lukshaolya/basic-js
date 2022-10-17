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
  let seasons = ['winter', 'spring', 'summer', 'autumn']
  let num = date.getMonth() 
  console.log(num)
  if (num <= 2) { return seasons[0]}
  else if (num >= 3 && num <= 5) { return seasons[1]}
  else if (num >= 6 && num <= 8) { return seasons[2]}
 else { return seasons[3]}
}

module.exports = {
  getSeason
};
