const http = require('http');
const url = require('url');

http
  .createServer(function (req, res) {
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('HI ESP');
  })
   .listen(process.env.PORT || 4000);
