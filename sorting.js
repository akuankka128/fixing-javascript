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
