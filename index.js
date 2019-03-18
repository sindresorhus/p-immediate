'use strict';

const pImmediate = () => new Promise(resolve => {
	setImmediate(resolve);
});

module.exports = pImmediate;
module.exports.default = pImmediate;
