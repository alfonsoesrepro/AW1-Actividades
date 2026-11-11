// DOM - EVENTOS
 
// Elementos del DOM
const botonAgregar = document.querySelector('main button')
const contadorCarrito = document.querySelector('nav span')




// PERSISTENCIA

let cantidad = Number(localStorage.getItem('cantidadCarrito')) || 0

// getItem() devuelve un string (o null si todavía no se guardó nada),
// por eso se convierte con Number() y se usa 0 como valor por defecto.

contadorCarrito.textContent = cantidad
 
botonAgregar.addEventListener('click', () => {
    cantidad++
    contadorCarrito.textContent = cantidad
    localStorage.setItem('cantidadCarrito', cantidad) // Se guarda la cant. en localStorage
})

// getItem -> Leer
// setItem -> Escribir

