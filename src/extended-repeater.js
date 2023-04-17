const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  let addition = options.addition;
  if (addition !== undefined) {
    addition = String(addition);
  }
  let repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  let additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  let separator = options.separator !== undefined ? String(options.separator) : '+';
  let additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '|';


  let additionStr = addition !== undefined ? (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition : '';

  // Repeat the main string and add the addition
  return (str + additionStr + separator).repeat(repeatTimes - 1) + str + additionStr;
}

module.exports = {
  repeater
};
