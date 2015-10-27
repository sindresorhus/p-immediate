# immediate-promise [![Build Status](https://travis-ci.org/sindresorhus/immediate-promise.svg?branch=master)](https://travis-ci.org/sindresorhus/immediate-promise)

> Returns a promise resolved in the next event loop - think [`setImmediate()`](https://nodejs.org/api/timers.html#timers_setimmediate_callback_arg)


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


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
