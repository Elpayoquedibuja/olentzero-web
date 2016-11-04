function conectar (){
document.getElementById("conectar").innerHTML='Conectando con la base de datos de OLENTZERO...';
setInterval(respuesta, 5000);
}
function respuesta (){
  document.getElementById("conectar").innerHTML='...';
  document.getElementById("ok").innerHTML='Conexión con la base de datos de OLENTZERO realizada con éxito!!';
  document.getElementById("responder").innerHTML='"Sí, su carta le ha llegado correctamente al Olentzero. Y, si su amatxu o su aita no dicen otra cosa, Olentzero pasará por su casa puntualmente el 25 de diciembre. No os preocupeis"';

}

btn_confirmar.addEventListener("click", conectar);
