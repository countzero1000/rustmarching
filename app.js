var path = require('path')
var express = require('express')

var app = express();

app.use(express.static(path.join(__dirname, '/dist')));

app.get('/*', function(req, res){
  res.sendfile("index.html", {root: path.join(__dirname, '/dist')});
});

let port = process.env.PORT || 8080;
app.listen(port);