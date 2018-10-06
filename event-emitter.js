const events = require('events').EventEmitter;
const emitter = new events.EventEmitter();

emitter.on('nodejspost',(data) => {
	console.log(data)
})

emitter.emit('nodejspost',"here is news about node js")