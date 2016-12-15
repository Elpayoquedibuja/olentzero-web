function conectar (){
document.getElementById("conectar").innerHTML='Conectando con la base de datos de OLENTZERO...';
setInterval(respuesta, 5000);
}
function respuesta (){
  document.getElementById("conectar").innerHTML='...';
  document.getElementById("ok").innerHTML='Conexión con la base de datos de OLENTZERO realizada con éxito!!';
  document.getElementById("responder").innerHTML='"Sí, su carta le ha llegado correctamente al Olentzero. Y, si su amatxu o su aita no dicen otra cosa, Olentzero pasará por su casa puntualmente la noche del 24 de diciembre. No os preocupeis"';

}

function desiluminar()
{

  campo = document.getElementById("nombre");
  campo.style.borderColor = "gray";
  campo.style.borderWidth = "1px";
  campo.style.borderStyle = "solid";
  conectar();
}

function validar(){
  nombre = document.getElementById("nombre").value;
  campo = document.getElementById("nombre");

  if(nombre == "" || nombre == " " || nombre == "   " || nombre == "    " || nombre == "     "){
    document.getElementById("conectar").innerHTML='Ups, tienes que escribir un nombre';
    campo.style.borderColor = "red";
    campo.style.borderWidth = "3px";
    campo.style.borderStyle = "solid";
  }

  else if(nombre.length > 50) {
    document.getElementById("conectar").innerHTML='¿Seguro que has escrito bien el nombre??';
  }
  else {
    conectar();
    // desiluminar();

  }
}

btn_confirmar.addEventListener("click", validar);
