const fs = require ("fs");

fs.rmdir("testing", (err)=> {
    if (err) {
        return console.error (err);
    } else {
        return console.log("sukses remove folder");
    }
});