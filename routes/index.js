var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Prueba Seminario Software' });
});

router.get('/signup', function(req,res,next){
  res.render('vista_mensaje',{"txtMsg":"","msg":""});
});

var msgsSubmit = [];

router.post('/signup',function(req,res,next){
  console.log(req.body);
    msgsSubmit.push("Prueba"+ " " + req.body.txtMsg);
    var msgs = msgsSubmit;
    var rtObject = {};
    rtObject.txtMsg=req.body.txtMsg;
      rtObject.msg=msgs;
  res.render('vista_mensaje', rtObject);
});

router.get('/api/usuarios',function(req,res,next){
  var usuarios=[
    {"nombre":"Yarelly","apellido":"Medina"},
    {"telefono":"33180229","coreeo":"azzmedina5@gmail.com"},
    {"facultad":["Ingenieria en Ciencias de la Computación","4to año"]},
    
  ];
  res.json(usuarios);
});


module.exports = router;
