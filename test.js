import test from 'ava';
import pImmediate from '.';

test('main', async t => {
	const values = [];

	await Promise.all([
		(async () => {
			await pImmediate();
			values.push(0);
		})(),
		(async () => {
			values.push(1);
		})()
	]);

	t.deepEqual(values, [1, 0]);
});
