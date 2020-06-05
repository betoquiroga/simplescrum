/*
 Agrega animación de ingreso al formulario
*/
let boton = document.getElementById("newTask") 
let formulario = document.getElementById("formElement")
let botonCancelar = document.getElementById("cancelForm")

boton.addEventListener("click", () => {
  formulario.classList.add("active")
})

botonCancelar.addEventListener("click", () => {
  formulario.classList.remove("active")
})