const fs = require ("fs");

fs.mkdir("testing", (err) =>{
    if(err) {
        return console.err(err);
    } else {
        return console.log("sukses buat folder");
    }
});