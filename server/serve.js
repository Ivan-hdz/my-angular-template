var express = require('express');
var app = express();
// Configuración
app.use(express.static(__dirname + '/public'));

var server = app.listen(1122, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("App listening at http://localhost:1122")
});

