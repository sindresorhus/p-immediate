'use strict';

const pImmediate = () => new Promise(resolve => {
	if (typeof setImmediate === 'function') {
		setImmediate(resolve);
	} else {
		setTimeout(resolve);
	}
});

module.exports = pImmediate;
// TODO: Remove this for the next major release
module.exports.default = pImmediate;
