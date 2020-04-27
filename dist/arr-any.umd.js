(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/assert-args'), require('@bemoje/assert-type')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/assert-args', '@bemoje/assert-type'], factory) :
	(global = global || self, global['arr-any'] = factory(global.assertArgs, global.assertType));
}(this, (function (assertArgs, assertType) { 'use strict';

	assertArgs = assertArgs && Object.prototype.hasOwnProperty.call(assertArgs, 'default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && Object.prototype.hasOwnProperty.call(assertType, 'default') ? assertType['default'] : assertType;

	/**
	 * Check whether a condition is true for any element of an array. The condition check is in the form of a callback.
	 * @param {Array} arr - The array to iterate
	 * @param {callback} callback - callback(element, index, array): boolean
	 * @returns {boolean}
	 */
	function arrAny(arr, callback) {
		assertArgs(arr, callback);
		assertType(Array, arr);
		assertType(Function, callback);

		for (let i = 0, len = arr.length; i < len; i++) {
			if (callback(arr[i], i, arr) === true) {
				return true
			}
		}

		return false
	}

	/**
	 * @callback callback
	 * @param {*} element
	 * @param {number} index
	 * @param {Array} array
	 * @returns {boolean}
	 */

	return arrAny;

})));
