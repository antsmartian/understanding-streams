const fs = require('fs');
// const block = fs.readFileSync("large"); // 4gb 512MB ??
// fs.writeFileSync("small-copy", block);

// fs.readFile('large',(err,data) => {
// 	fs.writeFile('small-copy',data, () => {
// 		console.log("file saved. .. ")
// 	})
// })

fs.createReadStream('small')
   .pipe(fs.createWriteStream('small-copy'))