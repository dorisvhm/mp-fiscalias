const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let fiscalia = {
 ubicacion:'',
 telefono: ''
};
let respuesta = {
 error: false,
 codigo: 200,
 mensaje: ''
};

var Connection = require('tedious').Connection;  
var config = {  
        server: 'localhost',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: 'sa', //update me
                password: 'Admin123.'  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: false,
           database: 'MP',  //update me
            port: 1433
        }
    };  

var connection = new Connection(config);  
connection.on('connect', function(err) {  
    console.log("Connected ***");  
});
connection.connect();

app.route('/fiscalias')
 .get(function (req, res) {
    var Request = require('tedious').Request;  
    var TYPES = require('tedious').TYPES; 

    var request = new Request("SELECT f.id, f.nombre, f.telefono, f.direccion, m.nombre municipio , d.nombre deparamento FROM Fiscalia f inner join Municipio m  on  m.id = f.iDmunicipio inner join Departamento d on d.id = m.idDepartamento", function(err, rowCount, rows) {  
        if (err) {  
            console.log(err);
            res.send(err);
        }
            res.set('Access-Control-Allow-Origin', '*');
            res.send(deptos);  
        });  
    var result = "";  
    var deptos = [];
    request.on('row', function(columns) {  
        var depto = {};
        columns.forEach(function(column) {  
            if (column.metadata.colName === 'id'){
                depto.id = column.value;
            }else if (column.metadata.colName === 'nombre'){
                depto.nombre = column.value;
            }else if (column.metadata.colName === 'telefono'){
                depto.telefono = column.value;
            }else if (column.metadata.colName === 'direccion'){
                depto.direccion = column.value;
            }
            else if (column.metadata.colName === 'municipio'){
                depto.municipio = column.value;
            }else if (column.metadata.colName === 'deparamento'){
                depto.departamento = column.value;
            }
            console.log('name '+column.metadata.colName)
            console.log(' '+column.metadata.type)
            console.log(' '+column.value)
        });
        deptos.push(depto);
        console.log(depto.id + ' - '+depto.nombre);   
    });  

    connection.execSql(request);  
 })
 
app.use(function(req, res, next) {
 respuesta = {
  error: true, 
  codigo: 404, 
  mensaje: 'URL no encontrada'
 };
 res.status(404).send(respuesta);
});
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});