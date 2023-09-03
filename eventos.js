let saludo = document.getElementById("saludoDiv");

saludo.addEventListener('click', () => {
  alert('Hola! Soy el div');
});

let boton = document.getElementById("saludoBoton");

boton.addEventListener('click', (evento) => {
  evento.stopPropagation();
  //alert('Hola!');
});