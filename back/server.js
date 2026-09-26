import {createServer} from "node:http";

createServer(function (request, response) {
    if (request.url === '/users'){
        response.writeHead(
            200, 
            {"content-type": "application/json"}
        );
        response.end(JSON.stringify({
            name: 'Yellow',
            email: 'uau@gmail.com'
        }, null, 2));
        return
    }

    response.writeHead(
        404,
        { 'content-type': 'application/JSON'}
    );
    response.end(JSON.stringify(
        {message:"Recurso não encontrado."},
        null,
        2
    ));
}).listen(3000);