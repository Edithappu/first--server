// server cration
const http = require("http");
 
const port = 3000;

http
    .createServer((req, res) => {
        res.writeHead(200, { "content-Type": "text/html" });
        res.write("<h4> Hello sarfraz this is from my new server</h4>");
        res.end();

    })
    .listen(port, () => {
        console.log(`My nodejs servr started on port ${port}`);

    });


    // http/localhost:3000 