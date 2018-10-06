const stream = require('stream');

let FacebookFeed = function(channel) {
   let readable = new stream.Readable({});
   let frndsUpdate = [
      "I'm at UK",
      "I'm at US"
   ];
   readable._read = () => {
      if(frndsUpdate.length) {
         return readable.push(frndsUpdate.shift() + "\n");
      }
      readable.push(null);
   };
   return readable;
};

let feed = new FacebookFeed();

let writable = new stream.Writable({
   decodeStrings: false
});

writable._write = (chunk, encoding, callback) => {
   console.log("writing",chunk.toString());
   callback();
};

feed.pipe(writable);

// feed.on("readable", () => {
//    let data = feed.read();
//    data && writable.write(data);
// });
// feed.on("end", () => console.log("No more news"));



