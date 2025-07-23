/**
 * Groups an array of objects by a specific key.
 * @param {Array} arr
 * @param {string} key
 * @returns {Object}
 */
function groupByKey(arr, key) {
  return arr.reduce((acc, obj) => {
    const groupKey = obj[key] || "undefined";
    acc[groupKey] = acc[groupKey] || [];
    acc[groupKey].push(obj);
    return acc;
  }, {});
}
