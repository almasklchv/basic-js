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
  let result = [];
  let correctMembers =  [];
  members.forEach((item) => {
    if (typeof item === 'string') {
      correctMembers.push(item);
    }
  })

  for (let i = 0; i < correctMembers.length; i++) {
    if (correctMembers.length == 0) {
      result.push(correctMembers[i])
      continue;
    }
    for (let j = 0; j < correctMembers.length; j++) {
    //  if (correctMembers[j] < )
    }
  }
}

module.exports = {
  createDreamTeam
};
