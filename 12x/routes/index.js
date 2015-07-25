var express = require('express');
var router = express.Router();
var fs = require('fs');

// Read the file and send to the callback

// Write the callback function

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', function (req, res) {
  res.json({"foo": "bar"});
});

router.get('/fixtures', function (req, res) {
  function handleFile(err, data) {
    if (err) throw err
    obj = JSON.parse(data)

    res.json(obj);
  }

  fs.readFile('data.json', handleFile)
});

module.exports = router;

