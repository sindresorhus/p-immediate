import test from 'ava';
import fn from './';

test('main', async t => {
	const x = [];

	await * [
		(async () => {
			await fn();
			x.push(0);
		})(),
		(async () => {
			x.push(1);
		})()
	];

	t.same(x, [1, 0]);
});

test('transfers value', async t => {
	t.same(await Promise.resolve('x').then(fn), 'x');
});
