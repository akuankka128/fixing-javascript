// Context:
// JavaScript can't compare arrays normally
// ([1, 2] === [1, 2] => false), this fixes
// that by adding adding a prototype function
// to Arrays which deeply compares their equality

(function anonymous() {
	let isObj = v => (v instanceof Object && !Array.isArray(v));

	Array.prototype.deepEquals = function(array) {
		// Not the same length? Not equals.
		if(this.length !== array.length) return false;
		for(let i = 0; i < this.length; i++) {
			let v1 = array[i], v2 = this[i];

			// If it's an array, check the arrays for equality
			if(Array.isArray(v1) && Array.isArray(v2)) {
				if(v1.length !== v2.length) return false;
				if(!v1.deepEquals(v2)) return false;
				continue;
			}

			// If they're Objects, compare their keys and values
			if(isObj(v1) && isObj(v2)) {
				let e1 = Object.entries(v1), e2 = Object.entries(v2);
				if(e1.length !== e2.length) return false;
				if(!e1.deepEquals(e2)) return false;
				continue;
			}

			// Easy and fast inequality check
			if(typeof v1 !== typeof v2) return false;

			// If item does not equal item 2,
			// it's not equals. Simple.
			if(array[i] !== this[i]) {
				return false;
			}
		}

		return true;
	}
})();
