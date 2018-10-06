// ./file/large8gb.mdf

const fs = require('fs');
const Stream = require('stream');

const rs = fs.createReadStream('./file/large8gb.mdf')

const writableStream = new Stream();
writableStream.writable = true;

writableStream.write = function (data) {
	rs.pause();
	console.log("processing slowly");
	setTimeout(() => rs.resume(),4000)
	return true;
}

writableStream.end = function () {}

rs.pipe(writableStream);
