'use strict';
var Promise = require('pinkie-promise');
var fn = typeof setImmediate === 'function' ? setImmediate : setTimeout;

module.exports = function () {
	return new Promise(function (resolve) {
		fn(resolve);
	});
};
