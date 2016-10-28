var express = require('express');
var server = express();

server.use(express.static("client"));

server.listen(process.env.PORT || 8080, function () {
  console.log("App listening on port:", process.env.PORT || 8080);
});
