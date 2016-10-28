var express = require('express');
var server = express();
var http = require('http');


server.use(function (req, res, next) {
  if (req.url.indexOf("service") === 1) {
   res.redirect("http://192.168.1.211:8080" + req.url.split("/service")[1]);
  } else {
    next();
  }
});

server.use(express.static("client"));
server.listen(process.env.PORT || 8080, function () {
  console.log("App listening on port:", process.env.PORT || 8080);
});
