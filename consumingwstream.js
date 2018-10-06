const Writable = require('./writablestream.js')

let written = Writable.write(Buffer.alloc(32, 'A'));
