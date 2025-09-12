document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault(); 

  let nombre = document.getElementById("nombre").value.trim();
  let apellido = document.getElementById("apellido").value.trim();
  let correo = document.getElementById("correo").value.trim();
  let telefono = document.getElementById("telefono").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();
  let respuesta = document.getElementById("respuesta");

  if(!nombre || !apellido || !correo || !telefono || !mensaje){
    respuesta.innerHTML = "⚠️ Todos los campos son obligatorios.";
    respuesta.style.color = "red";
    return;
  }

  let emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!emailRegex.test(correo)){
    respuesta.innerHTML = "⚠️ Ingresa un correo válido.";
    respuesta.style.color = "red";
    return;
  }

  let phoneRegex = /^[0-9]{9,15}$/;
  if(!phoneRegex.test(telefono)){
    respuesta.innerHTML = "⚠️ El teléfono debe tener entre 9 y 15 dígitos.";
    respuesta.style.color = "red";
    return;
  }

  respuesta.innerHTML = "✅ ¡Formulario enviado correctamente!";
  respuesta.style.color = "green";

  this.reset(); 
});
