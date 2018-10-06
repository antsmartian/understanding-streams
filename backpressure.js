const Writable = require('./writablestream.js')

const handleBackPressure = () => {
	let written = Writable.write(
		Buffer.alloc(16385,"Hey how are you!!!!")
	);

	if(!written)
	{
		// drain
		console.log("Ooops! backpressure...")
		Writable.once('drain',handleBackPressure)
	}
}

handleBackPressure();