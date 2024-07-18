// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var commentPath = path.join(__dirname, 'comment.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Read comments from json file
app.get('/api/comments', function(req, res) {
  fs.readFile(commentPath, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

