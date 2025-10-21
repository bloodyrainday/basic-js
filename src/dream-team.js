const { NotImplementedError } = require("../lib");

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
  if (!Array.isArray(members)) return false;
  let arr = members
    .map((item) =>
      typeof item === "string" ? item.trim().toUpperCase() : item
    )
    .sort();
  let name = [];
  arr.forEach((item) => {
    if (typeof item === "string") {
      name.push(item[0]);
    }
  });
  return name.join("");
}

module.exports = {
  createDreamTeam,
};
