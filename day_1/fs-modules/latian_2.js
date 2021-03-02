const fs = require ("fs");

const str = ""; 
const filename = "indeks.html"; 
   
fs.open(filename, "a", (err, fd)=>{ 
    if(err){ 
        console.log(err.message); 
    }else{ console
        fs.write(fd, str, (err, bytes)=>{ 
            if(err){ 
                console.log(err.message); 
            }else{ 
                console.log(bytes +' bytes written'); 
            } 
        })         
    } 
});