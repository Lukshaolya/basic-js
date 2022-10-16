const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let filtered = members.filter(item => typeof item === "string")
  let trimer = filtered.map( el => el.trim())
  
return trimer.map(word => word[0].toUpperCase().slice(0)).sort().join('')
}

module.exports = {
  createDreamTeam
};
//if (members.lenght == 0) { return false}