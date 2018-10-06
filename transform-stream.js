const { Transform } = require('stream');

class ConvertTolowerCase extends Transform {
	_transform (chunk, encoding, callback) {
		const transformed = chunk.toString().toLowerCase();
		this.push(transformed);

		callback();
	}
}

const LowerCaseTransform = new ConvertTolowerCase();

process.stdin
	   .pipe(LowerCaseTransform)
	   .pipe(process.stdout)