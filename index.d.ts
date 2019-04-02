declare const pImmediate: {
	/**
	@returns A promise that is resolved in the next event loop - think [`setImmediate()`](https://nodejs.org/api/timers.html#timers_setimmediate_callback_arg).

	@example
	```
	import pImmediate = require('p-immediate');

	(async () => {
		await pImmediate();

		// Executed in the next event loop
		console.log('🦄');
	})();
	```
	*/
	(): Promise<void>;

	// TODO: Remove this for the next major release, refactor the whole definition to:
	// declare function pImmediate(): Promise<void>;
	// export = pImmediate;
	default: typeof pImmediate;
};

export = pImmediate;
