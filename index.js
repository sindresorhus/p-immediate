'use strict';
module.exports = val => new Promise(resolve => {
	setImmediate(() => {
		resolve(val);
	});
});
