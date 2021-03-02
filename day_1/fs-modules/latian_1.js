const fs = require('fs');

// const handleRenameError = (err) => {
//     if (err) {
//         console.error (err) ;
//     }
// };

fs.rename('before.json', 'after.json', (err) => {
    if (err) {
      return console.error(err)
    } else {
        return console.log('success rename file');
    }
  });