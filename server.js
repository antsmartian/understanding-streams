const net = require('net');

net.createServer((socket) => {
	socket.write("Hey hello how are you?")
	socket.on("readable",function() {
		process.stdout.write(this.read())
	})
}).listen(8080)