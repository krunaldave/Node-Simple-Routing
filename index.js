const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    let path = '/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/contact':
            path += 'contact.html';
            break;
        default:
            path += '404.html';
            break;
    }

    fs.readFile('./View/'+path,(err,data)=>{
        if(err){
            console.log("there is error in reading file!");
        } else {
            res.write(data);
        }
        res.end();
    });
    
});

server.listen(PORT,()=>console.log(`Server is listening on ${PORT}`));