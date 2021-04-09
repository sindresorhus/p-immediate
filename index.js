export default function pImmediate() {
	return new Promise(resolve => {
		if (typeof setImmediate === 'function') {
			setImmediate(resolve);
		} else {
			setTimeout(resolve);
		}
	});
}
