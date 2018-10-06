const Readable = require('stream').Readable;

const rs = new Readable();

rs.push("hey streams");
rs.push("how are you\n\n");
// rs.push(null);

console.log(Object.getPrototypeOf(rs))
rs.pipe(process.stdout)