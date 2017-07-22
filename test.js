import test from 'ava';
import m from '.';

const fixture = Symbol('fixture');

test('main', async t => {
	const x = [];

	await Promise.all([
		(async () => {
			await m();
			x.push(0);
		})(),
		(async () => {
			x.push(1);
		})()
	]);

	t.deepEqual(x, [1, 0]);
});

test('transfers value', async t => {
	t.deepEqual(await Promise.resolve(fixture).then(m), fixture);
});
