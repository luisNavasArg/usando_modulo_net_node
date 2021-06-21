const { Socket } = require('dgram');
const net = require('net')
const options={
    port:4000,
    host:'localhost'
}
const readLine =  require('readline-sync')//se puede instalar del lado del servidor para responder desd ela terminal
const client = net.createConnection(options);

client.on('connect',()=>{
    //se ejecuta una sóla vez
    console.log('Conexion satisfactoria')
   // sendLine()
   client.write('hi')
   
    
});
client.on('data',(data)=>{
    //se ejecuta siempre está función
    console.log('El servidor dice:  '+ data)
    sendLine()
})
client.on('error',(err)=>{
    console.log(err.message)
})

const sendLine=()=>{
    let line = readLine.question('\lnDigite alguna cosa: \t')
    if(line == '0'){
        client.end()
    }else{
        client.write(line)
    }
}