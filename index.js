'use strict';

const pImmediate = () => new Promise(resolve => {
	setImmediate(resolve);
});

module.exports = pImmediate;
// TODO: Remove this for the next major release
module.exports.default = pImmediate;
