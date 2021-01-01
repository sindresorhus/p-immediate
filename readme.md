# p-immediate

> Returns a promise resolved in the next event loop - think [`setImmediate()`](https://nodejs.org/api/timers.html#timers_setimmediate_callback_arg)

Promises are by default [resolved in a microtask](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/) (current event loop).


## Install

```
$ npm install p-immediate
```


## Usage

```js
const pImmediate = require('p-immediate');

(async () => {
	await pImmediate();

	// Executed in the next event loop
	console.log('🦄');
})();
```


## Related

- [delay](https://github.com/sindresorhus/delay) - Delay a promise a specified amount of time
- [p-min-delay](https://github.com/sindresorhus/p-min-delay) - Delay a promise a minimum amount of time
- [p-timeout](https://github.com/sindresorhus/p-timeout) - Timeout a promise after a specified amount of time
- [More…](https://github.com/sindresorhus/promise-fun)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
