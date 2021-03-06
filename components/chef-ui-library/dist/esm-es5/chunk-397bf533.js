import { H as setToString, I as overRest, J as identity } from './chunk-6b826df5.js';
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + '');
}
var _baseRest = baseRest;
export { _baseRest as b };
