# immediate-promise [![Build Status](https://travis-ci.org/sindresorhus/immediate-promise.svg?branch=master)](https://travis-ci.org/sindresorhus/immediate-promise)

> Returns a promise resolved in the next event loop - think [`setImmediate()`](https://nodejs.org/api/timers.html#timers_setimmediate_callback_arg)

Promises are by default [resolved in a microtask](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/) (current event loop).


## Install

```
$ npm install --save immediate-promise
```


## Usage

```js
const immediatePromise = require('immediate-promise');

somePromise()
	.then(immediatePromise)
	.then(() => {
		// executed in the next event loop
	});
```


## Related

- [set-immediate-shim](https://github.com/sindresorhus/set-immediate-shim) - Simple `setImmediate` shim


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
