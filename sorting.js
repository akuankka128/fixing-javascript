(function() {
	let s = Array.prototype.sort;

	/**
	 * Sorts an array in-place.
	 * @param {Function} [compareFn] Optional custom sorting function.
	 * @returns {Array} Sorted array.
	 */
	Array.prototype.sort = function(compareFn) {
		return s.call(this, (compareFn || ((f, s) => f < s ? -1 : f > s ? 1 : 0)));
	}
})();

// Context:
// JavaScript's built-in sorting function
// seems to sort everything by their alphabetical
// order (by converting them to strings?)
// (i.e. [1, 15, 2, 23] => [1, 15, 2, 23])
// instead of their numerical order
// ([1, 15, 2, 23] => [1, 2, 15, 23])
