function vacaciones (destino) {
    if ( destino === "mar"){
        console.log("vacaciones con amigos");
    } else if (destino==="montaña"){
        console.log("vacaciones con mi padre")
    } else {
        console.log("me quedo en casa")
    }
}

vacaciones ( "mar")
vacaciones ("montaña")
vacaciones ("chascomus")

//--     ----------- 

function votacion(edad){
    if (edad >= 18){
        console.log("puede votar")
    } else if ( edad < 18 ){
        console.log("no puede votar");
    } else {
        console.log("El dato ingresado no es un numero, debe ingresar su edad")
    }
}
    votacion( "hola")

//-----------
    function puedeManejar(edad) {
        if(edad >= 18) {
                 console.log( true );
        } 
        console.log( false );
      }
      
      puedeManejar(17);

//-----------
function viajar(destino) {
    if(destino === 'Brasil') {
             console.log('Gire a la izquierda');
    } else if(destino === 'Argentina') {
             console.log('Gire a la derecha');
    } else {
             console.log('Nos perdimos');''
    }
  };
  viajar('Brasil');
  viajar('Argentina');