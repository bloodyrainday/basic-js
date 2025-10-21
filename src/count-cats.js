const { NotImplementedError } = require("../lib");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let cats = 0;
  matrix.forEach((item) => {
    item.forEach((item2) => {
      if (item2 === "^^") {
        cats++;
      }
    });
  });
  return cats;
}

module.exports = {
  countCats,
};
