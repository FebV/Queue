var express = require('express');
var app = express();

app.currentNum = 0;


app.get('/sign', function (req, res) {
  res.send(JSON.stringify({status: 'OK', num: app.currentNum++}));
});

app.get('/status', function(req, res) {
    res.send(''+app.currentNum);
});

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});