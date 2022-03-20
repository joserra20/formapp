const form = document.getElementById("contactForm");

async function enviarFormulario() {
    
    let nombre = document.getElementById("name").value;
    let email = document.getElementById("emailAddress").value;
    let mensaje = document.getElementById("message").value;
    let error = document.getElementById("error");
    console.log(mensaje);
    if(nombre.length < 2){
        text = "Por favor, ingrese un nombre válido";
        alert(text);
        //error.innerHTML = text;
        return false;
      }
      if(email.indexOf("@") == -1 || email.length < 4){
        text = "Por favor, introduce un correo electrónico válido";
        alert(text);
        //error.innerHTML = text;
        return false;
      } 
      if(mensaje.length < 4){
        text = "Por favor, introduce un mensaje válido";
        alert(text);
        //error.innerHTML = text;
        return false;
      } 

      let request = await fetch("api/form",{
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombre,
            email: email,
            mensaje: mensaje
        }),
        dataType: "json",
    }).catch(console.error);

    if (request.ok){
        alert("Su mensaje ha sido enviado");
        window.location.reload();
    }

      

  }

  async function cargarMensajes() {
    
    let nombre = document.getElementById("name").value;
    let email = document.getElementById("emailAddress").value;
    let mensaje = document.getElementById("message").value;
    let error = document.getElementById("error");
    console.log(mensaje);
    if(nombre.length < 2){
        text = "Por favor, ingrese un nombre válido";
        alert(text);
        //error.innerHTML = text;
        return false;
      }
      if(email.indexOf("@") == -1 || email.length < 4){
        text = "Por favor, introduce un correo electrónico válido";
        alert(text);
        //error.innerHTML = text;
        return false;
      } 
      if(mensaje.length < 4){
        text = "Por favor, introduce un mensaje válido";
        alert(text);
        //error.innerHTML = text;
        return false;
      } 

      let request = await fetch("api/form",{
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombre,
            email: email,
            mensaje: mensaje
        }),
        dataType: "json",
    }).catch(console.error);

    if (request.ok){
        alert("Su mensaje ha sido enviado");
        window.location.reload();
    }

      

  }

  form.addEventListener("submit", function (event) {
    
	event.preventDefault();
	enviarFormulario();

    $( "#verMensajes" ).click(function() {
        cargarMensajes();
      });
});