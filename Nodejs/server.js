const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configurar cabeceras y cors

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


app.get('/', function (req, res) {
  res.send('Hello World');
});

app.post('/controller', function (req, res) {
  req.body.entrada = "daniel";  
  var entrada = req.body;
    
    res.send(entrada);
  });

  app.post('/operaNumeros', function (req, res) {
    let entrada = req.body;
    let validacionEntradaNumber = true;
    let operaciones = {
      sumaelemento : 0,
      restaElemento : 0,
      multiplicacionElementos : 1,
      divisionElementos : null
    };

    /* validar si la matriz esta en un formato correcto si no envio error 422*/
    for(let a = 0 ; a < entrada.length;a++){
      if(typeof entrada[a] != "number")
      {
        res.sendStatus(422);
        validacionEntradaNumber= false;
          break;
      }     
  } 
    
    entrada.forEach(element => {
      operaciones.sumaelemento = operaciones.sumaelemento + element;
      operaciones.restaElemento = operaciones.restaElemento - element;
      operaciones.multiplicacionElementos = operaciones.multiplicacionElementos * element;
      
      if(operaciones.divisionElementos == null){
        operaciones.divisionElementos =  element;
      }else{
        operaciones.divisionElementos =  operaciones.divisionElementos / element;
      }
      
      
    });
      /*res.send(); envio arreglos y json*/
   //   res.sendStatus(operaciones);/* solo retorno un elemento */
      res.send(operaciones);
    });
  

const port = process.env.PORT || 8081;;
app.listen(port, function () {
  console.log('myapp listening on port ' + port);
});


// Configurar cabeceras y cors
