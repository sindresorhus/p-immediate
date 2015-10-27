'use strict';
var Promise = require('pinkie-promise');
var fn = typeof setImmediate === 'function' ? setImmediate : setTimeout;

module.exports = function (value) {
	return new Promise(function (resolve) {
		fn(function () {
			resolve(value);
		});
	});
};
