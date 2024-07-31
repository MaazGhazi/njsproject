const http = require('http'); // imported b/c its used to create a server

const server = http.createServer((req, res) => { // creating the server and passing a function that will be executed for every incoming request "req" and response "res"
  const url = req.url;
  const method = req.method;
  
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
}

});

server.listen(3000);