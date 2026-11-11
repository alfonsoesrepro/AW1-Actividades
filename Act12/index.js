// Arreglos
 
// a)
 
const numeros = []
 
for (let i = 0; i < 5; i++) {
    const numero = Number(prompt(`Ingrese el número ${i + 1} de 5:`))
    numeros.push(numero)
}
 
console.log(numeros)
 
// b)
 
const impares = []
 
for (let i = 0; i < 5; i++) {
    const numero = Number(prompt(`Ingrese el número ${i + 1} de 5:`))
    if (numero % 2 !== 0) {
        impares.push(numero)
    }
}
 
console.log(impares)
 
// c)
 
const frutas = ['pera', 'manzana', 'banana', 'durazno']
 
frutas.forEach((fruta, indice) => {
    frutas[indice] = fruta.toUpperCase()
})
 
console.log(frutas)
 
// d)
 
const frutasOG_D = ['pera', 'manzana', 'banana', 'durazno']
 
const frutasMayusculas = frutasOG_D.map((fruta) => fruta.toUpperCase()) // Crea un nuevo arreglo (no modifica el original)
 
console.log(frutasOG_D)
console.log(frutasMayusculas)
 
// e)
 
const frutasOG_E = ['pera', 'manzana', 'banana', 'durazno']
 
const frutasConNa = frutasOG_E.filter((fruta) => {
    if (fruta.includes('na')) {
        return true
    }
    else {
        return false
    }
})
 
console.log(frutasConNa)
 



// Objetos
 
// a)
 
const producto = {
    nombre: 'Remera básica',
    precio: 15000,
    stock: 8,
    talles: ['s', 'm', 'l']
}
 
// b)
 
const productos = [
    {
        nombre: 'Buzo con capucha',
        precio: 42000,
        stock: 3,
        talles: ['s', 'm', 'l']
    },
    {
        nombre: 'Jean recto',
        precio: 38000,
        stock: 12,
        talles: ['s', 'm', 'l']
    },
    {
        nombre: 'Campera de abrigo',
        precio: 85000,
        stock: 1,
        talles: ['s', 'm', 'l']
    },
    {
        nombre: 'Remera estampada',
        precio: 18000,
        stock: 20,
        talles: ['s', 'm', 'l']
    }
]
 
productos.forEach((producto) => {
    if (producto.stock < 5) {
        console.log(producto)
    }
})
 
// c)
 
const productosConDescuento = productos.map((producto) => {
    return {
        ...producto,
        precio: producto.precio * 0.9
    }
})
 
console.log(productosConDescuento)
 
// d)
 
const productosConStock = productos.filter((producto) => producto.stock > 10)
 
console.log(productosConStock)