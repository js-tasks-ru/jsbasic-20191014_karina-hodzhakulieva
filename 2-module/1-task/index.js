/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  let copy = JSON.parse(JSON.stringify(obj));
  return copy;
}
