var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index1.html');
});

var server = app.listen(process.env.PORT || 8000, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`Listening on port ${port}`);
});