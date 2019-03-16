import test from 'ava';
import pImmediate from '.';

const fixture = Symbol('fixture');

test('main', async t => {
	const x = [];

	await Promise.all([
		(async () => {
			await pImmediate();
			x.push(0);
		})(),
		(async () => {
			x.push(1);
		})()
	]);

	t.deepEqual(x, [1, 0]);
});

test('transfers value', async t => {
	t.deepEqual(await Promise.resolve(fixture).then(pImmediate), fixture);
});
