var fs = require('fs');

// fs.writeFileSync('./file/new.mdf', fs.readFileSync('./file/large8gb.mdf'));

fs.createReadStream('./file/large8gb.mdf')
  .pipe(fs.createWriteStream('./file/dummy.mdf'));
