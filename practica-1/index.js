//document.write("<h2>hello</h2>")

/*function saludo(){
    console.log("hola")
}*/

const colores = ['rojo','azul','verde']

//console.log(colores.length)

//document.body.innerHTML = colores.toString()

console.log(colores.join(" - "))

const letras = ['c', 'b', 'a', 'd']

console.log(letras.sort())

console.log(letras.reverse())

letras.push('z')
console.log(letras)

letras.pop()
console.log(letras)

const nombres=['carlos','manuel','luis','alejandro','roberto']

// nombres.forEach((n)=>{
//     console.log(`hola ${n}`)
// })


const nombresMayusculas = nombres.map((n)=> {
    return n.toUpperCase()
})

console.log(nombresMayusculas)


const nombres4Letras = nombres.filter((n)=>{
    if(n.length === 6){
        return n
    }
})

console.log(nombres4Letras)

const frutas = ['pera','melon','piña','manzana']
//operador spread
const comidas = ['hamburguesas','pizza','sushi', ...frutas]
console.log(comidas)

//parametros rest
const registroUsuario = (nombre, correo, ...dataAdicional)=>{
    console.log(nombre, correo, dataAdicional)
}

registroUsuario('carlos', 'correo@gmail.com')
registroUsuario('juan', 'juan@gmail.com',28 ,'nicaragua')

//destructuracion de objetos

const amigos = ['leo','marcelo','lautaro']

const [primerAmigo, segundoAmigo, tercerAmigo] = amigos

console.log(tercerAmigo)

for(let i = 1; i < 11; i++){
    console.log(i)
}