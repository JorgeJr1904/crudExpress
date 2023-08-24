import mysql from 'mysql';
var conection = mysql.createConnection({
    host: "localhost",
    user:"usr_empresa",
    password:'Empres@123',
});
conection.connect( function(err){
    if(err){
        console.log('Error en la coneccion ' + err.stack);
        return
    }
    console.log('Conexion exitosa ID: ' + conection.threadId);
})

export {conection};