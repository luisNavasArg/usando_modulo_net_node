const net = require('net')
const server = net.createServer();
const fs =require('fs')
const express = require('express')


const clientes = []
server.on('connection',(socket)=>{
    socket.on('data',(data)=>{
        console.log('\n mensaje recibido desde el cliente '+ data)
        console.log(socket.remoteAddress)
        console.log(`Puerto local ${socket.localPort}`)
        // Lectura de archivos
fs.readFile("luis.txt",function (err,data) {
    if (err){
       console.log(err)
    }else {
        console.log(data.toString())
    }
})
        socket.write('Recibido')
    })

    socket.on('close',()=>{
        console.log('comunicación finalizó')
    })
    socket.on('error',(err)=>{
        console.log(err.message)
    })
})

server.listen(4000,(req,res)=>{
    console.log('Servidor corriendo en el puerto: ', server.address().port)
})