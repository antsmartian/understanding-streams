const stream = require('stream');

let FacebookFeed = function() {
   let readableStream = new stream.Readable({
      objectMode : true
   })

   let updates = [
      {place: "Im at UK"},
      {place: "Im at US"}
   ];

   readableStream._read = () => {
      if(updates.length) {
         return readableStream.push(updates.shift())
      }

      readableStream.push(null);
   }

   return readableStream;
}

module.exports = FacebookFeed;

// Readable is also inherited by event emitters
// "readable" , "end" 








