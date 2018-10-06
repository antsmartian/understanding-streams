async function wait() {
	return new Promise(resolve => setTimeout(resolve, 100));
}

async function f1() {
	try {
		throw new Error();
	} catch (e) {
		console.error(e);
	}
}

async function f2() {
	wait();
	return f1();
}

async function f3() {
	return f2();
}

async function f4() {
	// decoy
	return f2();
}

f3();