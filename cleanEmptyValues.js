/**
 * Removes null, undefined, or empty string fields from an object.
 * @param {Object} obj
 * @returns {Object}
 */
function cleanEmptyValues(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v !== null && v !== undefined && v !== "")
  );
}
