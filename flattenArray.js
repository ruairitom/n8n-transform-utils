/**
 * Flattens a one-level nested array.
 * @param {Array} arr
 * @returns {Array}
 */
function flattenArray(arr) {
  return arr.reduce((flat, toFlatten) => flat.concat(toFlatten), []);
}
