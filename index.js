'use strict';

const pImmediate = value => new Promise(resolve => {
	setImmediate(() => {
		resolve(value);
	});
});

module.exports = pImmediate;
module.exports.default = pImmediate;
