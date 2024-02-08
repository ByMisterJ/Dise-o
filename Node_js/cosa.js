var http = require('http')
var module1 = require('./module')
var module2 = require('./module')

function onRequest(request, response){
    response.writeHead(200, ('Content Type': 'text/plain'));
    fs.readFile('./index.html', null, function(error, data){
        if(error){
            // sin finalizar 
        }
    })
}

http.createServer(onRequest).listen(8000)