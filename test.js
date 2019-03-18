import test from 'ava';
import pImmediate from '.';

const fixture = Symbol('fixture');

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

test('transfers value', async t => {
	t.deepEqual(await Promise.resolve(fixture).then(pImmediate), fixture);
});
