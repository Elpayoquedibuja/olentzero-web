var contador = 1;
var div_Flecha = document.getElementById("flecha");
var div_Imagen = document.getElementById("imagen");
var p_Ok = document.getElementById("ok");
var p_responder = document.getElementById("responder");

function borrarCampo(){
  var campo = document.getElementById("nombre");
   nombre.value = "";
}

function conectar (){
document.getElementById("conectar").innerHTML='Conectando con la base de datos de OLENTZERO...';
console.log("conectar");
setInterval(respuesta, 5000);
console.log("conectar2");
// document.getElementById("imagen").innerHTML='<img src="img/luz-01.png" width=50% />';
}
function respuesta (){
  div_Flecha.style.display = "none";
  div_Imagen.style.display = "block";
  p_Ok.style.display = "block";
  p_responder.style.display = "block";
  //document.getElementById("flecha").innerHTML='<img src="img/luz-04.png" width=0% />';
  document.getElementById("conectar").innerHTML='...';
  document.getElementById("imagen").innerHTML='<img src="img/luz-02.png" width=50% />';
  document.getElementById("ok").innerHTML='¡Conexión con la base de datos de OLENTZERO realizada con éxito!';
  console.log(contador);
  document.getElementById("responder").innerHTML='"Sí, su carta le ha llegado correctamente al Olentzero. Y, si su amatxu o su aita no dicen otra cosa, Olentzero pasará por su casa puntualmente la noche del 24 de diciembre. ¡No os preocupéis! Que se vaya a dormir prontito (muy importante)"...';
  console.log("respuesta");
  contador = 1 + contador;

}

function respuesta_contratiempo (){
  iluminar();
  div_Flecha.style.display = "block";
  div_Imagen.style.display = "block";
  console.log("inicio-respuesta-contratiempo");
  document.getElementById("flecha").innerHTML='<img src="img/luz-04.png" width=50% />';
  document.getElementById("conectar").innerHTML='No nos ha llegado: ¿Seguro que has escrito bien el nombre?';
  document.getElementById("imagen").innerHTML='<img src="img/luz-03.png" width=50% />';
  console.log("respuesta_contratiempo");
  contador = contador + 1;
  console.log(contador);
  console.log("fin-respuesta-contratiempo");
  // iluminar();
}

function adios(){
  console.log("Adios");
}


function desiluminar(){


  campo.style.borderColor = "gray";
  campo.style.borderWidth = "1px";
  campo.style.borderStyle = "solid";
  // conectar();
}

function foco(){
  var nombre = document.getElementById("nombre").focus();
}

function borrarIzena(){
  document.getElementById("nombre").value = "";
}

function iluminar (){
  campo = document.getElementById("nombre");
  campo.style.borderColor = "red";
  campo.style.borderWidth = "3px";
  campo.style.borderStyle = "solid";
}

function validar(){
  document.getElementById("conectar").innerHTML='Conectando con la base de datos de OLENTZERO...';
  div_Flecha.style.display = "none";
  div_Imagen.style.display = "none";
  p_Ok.style.display = "none";
  p_responder.style.display = "none";
  nombre = document.getElementById("nombre").value;
  campo = document.getElementById("nombre");
  console.log("Entro en la función VALIDAR");

  if(nombre == "" || nombre == 0 || /^\s+$/.test(nombre) || nombre == null ) {
    document.getElementById("conectar").innerHTML='Ups, tienes que escribir un nombre';
    campo.style.borderColor = "red";
    campo.style.borderWidth = "3px";
    campo.style.borderStyle = "solid";
    foco();
  }

  else if((/\S+@\S+\.\S+/.test(nombre))){
    document.getElementById("conectar").innerHTML='Uy, uy, tienes que escribir su nombre... (no su dirección de correo electrónico).';
    iluminar();
    foco();
  }

  else if((/\S+@/.test(nombre))){
    document.getElementById("conectar").innerHTML='Uy, uy, ¿por qué su nombre tiene una arroba?';
    iluminar();
  }

  else if((/\S+\.\S+/.test(nombre))){
    document.getElementById("conectar").innerHTML='Uy, uy, ¿Por qué su nombre tiene un punto?';
  }

  else if( (/\S+\,\S+/.test(nombre)) || (/\S+\€\S+/.test(nombre)) || (/\S+\$\S+/.test(nombre)) || (/\//.test(nombre)) || (/\S+\(\S+/.test(nombre)) || (/\S+\)\S+/.test(nombre)) || (/\=/.test(nombre)) || (/\¡/.test(nombre)) || (/\!/.test(nombre)) || (/\*/.test(nombre)) || (/\;/.test(nombre)) || (/\+/.test(nombre)) || (/\_/.test(nombre)) || (/\$/.test(nombre)) || (/\·/.test(nombre)) || (/\%/.test(nombre)) || (/\&/.test(nombre)) || (/\>/.test(nombre)) || (/\</.test(nombre)) || (/\3/.test(nombre)) || (/\4/.test(nombre)) || (/\5/.test(nombre)) || (/\6/.test(nombre)) || (/\ç/.test(nombre)) || (/\8/.test(nombre)) || (/\9/.test(nombre)) || (/\0/.test(nombre)) ){
    document.getElementById("conectar").innerHTML='Conectando con la base de datos de OLENTZERO...';
    setTimeout(respuesta_contratiempo, 5000);
  }

  else if((/_/.test(nombre))){
    document.getElementById("conectar").innerHTML='¿Y esto?';
    iluminar();
  }

  else if(nombre.length > 50) {
    document.getElementById("conectar").innerHTML='¿Seguro que has escrito bien el nombre??';
  }
  else {
    // conectar();
    document.getElementById("conectar").innerHTML='Conectando con la base de datos de OLENTZERO...';
    setTimeout(respuesta, 5000);
    desiluminar();

  }
}

btn_confirmar.addEventListener("click", validar);
