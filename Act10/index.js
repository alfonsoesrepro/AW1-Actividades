// Estructuras de control CONDICIONALES

// a)

let edad = 23

if(edad >= 18) {
    console.log("Es mayor de edad")
}
else {
    console.log("Es menor de edad")
}

// b)

let numero = 4

if((numero % 2) === 0) {
    console.log("El número es par")
}
else {
    console.log("El número es impar")
}

// c)

let nota = 7

if(nota < 4) {
    console.log("Reprobado")
}
else if (nota >= 4 && nota < 7) {
    console.log("Aprobado")
}
else {
    console.log("Excelente")
}




// Estructuras de control BUCLES

// a)

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// b)

for (let i = 10; i >= 1; i--) {
    console.log(i)
}

// c)

for (let i = 0; i <= 20; i++) {
    if((i % 2) === 0) {
        console.log("El número es par")
    }
    else {
        console.log("El número es impar")
    }
}

// d)

for (let i = 0; i <= 20; i++) {
    if((i & 2) === 0) {
        console.log(`El número ${i} es par`)
    }
    else {
        console.log(`El número ${i} es impar`)
    }
}