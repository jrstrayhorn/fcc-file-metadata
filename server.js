// server.js
// where your node app starts

// init project
var express = require('express');

var multer = require('multer')

var upload = multer({ dest: 'uploads/'})

var filesize = require('filesize');

var app = express();


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.post('/filechecker', upload.single('userFile'), function (req, res) {
  var fileSize = req.file.size;
  console.log(fileSize);
  var fileSizeInEnglish = filesize(fileSize)
  res.status(200).send({size: fileSizeInEnglish});
})

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT || '3939', function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
