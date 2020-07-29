var http = require('http')

var opcoes = {
    hostname: 'localhost',
    port: 80,
    path: '/',
    headers: {
        'Accept': 'application/json'
    }
}

var buffer_corpo_responde = []

http.get(opcoes, function(res){
    res.on('data', function(pedaco){
        buffer_corpo_responde.push(pedaco)
    })
    res.on('end', function(){
        var corpo = Buffer.concat(buffer_corpo_responde).toString()
        console.log(corpo)
    })

    res.on('error', function(){

    })
})