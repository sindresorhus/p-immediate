import test from 'ava';
import fn from './';

test('main', async t => {
	const x = [];

	await Promise.all([
		(async () => {
			await fn();
			x.push(0);
		})(),
		(async () => {
			x.push(1);
		})()
	]);

	t.deepEqual(x, [1, 0]);
});

test('transfers value', async t => {
	t.deepEqual(await Promise.resolve('x').then(fn), 'x');
});
