// Funciones de declaración

// a)

function saludar() {
    console.log('¡Hola, bienvenido!')
}

// b)

function saludarPersona(nombre) {
    console.log(`¡Hola ${nombre}, bienvenido!`)
}

// c)

function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true
    }
    else {
        return false
    }
}

let resultado = esMayorDeEdad(23)





// Funciones de flecha

// a)
 
const esMayorDeEdadFlecha = (edad) => edad >= 18 // forma corta de escribirlo
 
const resultadoFlecha = esMayorDeEdadFlecha(15)
 
// b)
 
const compararNumeros = (numero1, numero2) => {
    if (numero1 < numero2) {
        console.log(`El número ${numero1} es menor que ${numero2}`)
    }
    else if (numero1 === numero2) {
        console.log(`El número ${numero1} es igual que ${numero2}`)
    }
    else {
        console.log(`El número ${numero1} es mayor que ${numero2}`)
    }
}
 
for (let i = 0; i <= 10; i++) {
    compararNumeros(i, 5) // Primer parámetro: iterador o contador
}
 



// Funciones callback
 
// a) 

// const operacion = (numero1, numero2, callback) => {
//     callback(numero1, numero2)
// }
 
function suma(numero1, numero2) {
    const resultado = numero1 + numero2
    console.log(`El resultado de la suma es ${resultado}`)
}
 
function resta(numero1, numero2) {
    const resultado = numero1 - numero2
    console.log(`El resultado de la resta es ${resultado}`)
}
 
// b)
 
const operacion = (numero1, numero2, callback) => {
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number' || isNaN(numero1) || isNaN(numero2)) {
        console.log('Debe ingresar solo números.')
        return
    }
    callback(numero1, numero2)
}