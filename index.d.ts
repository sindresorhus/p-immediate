/**
@returns Is resolved in the next event loop - think [`setImmediate()`](https://nodejs.org/api/timers.html#timers_setimmediate_callback_arg).
*/
export default function pImmediate<ValueType>(
	value: ValueType
): Promise<ValueType>;
