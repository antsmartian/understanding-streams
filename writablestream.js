const stream = require('stream');

let Writable = new stream.Writable({
	decodeStrings: false
});

Writable._write = (chunk, encoding, callback) => {
	console.log("writing to stream", chunk.toString());
	callback();
}

module.exports = Writable;