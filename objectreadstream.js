const stream = require('stream');

let FacebookFeed = function(channel) {
   let readable = new stream.Readable({
      objectMode : true
   });
   let frndsUpdate = [
      {place:"I'm at UK"},
      {place:"I'm at US"}
   ];
   readable._read = () => {
      if(frndsUpdate.length) {
         return readable.push(frndsUpdate.shift());
      }
      readable.push(null);
   };
   return readable;
};

let feed = new FacebookFeed();

feed.on("readable", () => {
   let data = feed.read();
   data && process.stdout.write(JSON.stringify(data));
});
feed.on("end", () => console.log("No more news"));

