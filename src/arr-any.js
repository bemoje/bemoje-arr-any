import assertArgs from '@bemoje/assert-args'
import assertType from '@bemoje/assert-type'

/**
 * Check whether a condition is true for any element of an array. The condition check is in the form of a callback.
 * @param {Array} arr - The array to iterate
 * @param {callback} callback - callback(element, index, array): boolean
 * @returns {boolean}
 */
export default function arrAny(arr, callback) {
	assertArgs(arr, callback)
	assertType(Array, arr)
	assertType(Function, callback)

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
