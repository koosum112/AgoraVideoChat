// const http = require('http');
const express = require('express');
const https = require('https');
const url = require('url');
const path = require('path');
const fs = require('fs'); //file system module

// setting user-defined type
const mineTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
};

// var options = {
// 	key: fs.readFileSync('./cer/server-key.pem'),
// 	ca: [fs.readFileSync('./cer/cert.pem')],
// 	cert: fs.readFileSync('./cer/server-cert.pem')
// };

//create http server
// https.createServer(options, function(req, res){
//     var uri = url.parse(req.url).pathname;
//     var fileName = path.join(process.cwd(), unescape(uri));
//     console.log('Loading ' + uri);
//     var stats;

//     //check if the file is enter
//     try{
//         stats = fs.lstatSync(fileName);
//     } catch(e) {
//         res.writeHead(404, {'Content-type': 'text/plain'});
//         res.write('404 Not Found!\n');
//         res.end();
//         return;
//     }

//     //get the file type to check is html type
//     if(stats.isFile()){ //xxxx.xxxx.html (using reverse to make "html" in the index 0)
//         console.log(path.extname(fileName));
//         var mineType = mineTypes[path.extname(fileName).split(".").reverse()[0]];
//         res.writeHead(200, {'Content-type': mineType});

//         var fileStream = fs.createReadStream(fileName);
//         fileStream.pipe(res);
//     } else if(stats.isDirectory()){ //如果發現路徑是資料夾，則找index.html
//         res.writeHead(302, {
//             'Location': 'index.html'
//         });
//         res.end();
//     } else{
//         res.writeHead(500, {'Content-type': 'text/plain'});
//         res.write('500 Internal Error\n');
//         res.end();
//     }
// }).listen(8080);


var app = express();

app.use(express.static('.'));

// Start the server
var port = process.env.PORT || 8080;
var server = app.listen(port, () => {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

module.exports = app;