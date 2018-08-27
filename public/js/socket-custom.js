var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//Enviando informacion
socket.emit('enviarMensaje', {
    usuario: 'Fredy',
    mesaje: 'Hola Mundo'
}, function(resp) {
    console.log(resp);
});

//Escuchar Mensaje

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});