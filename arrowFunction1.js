let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {//arrow function pode substituir a palavra "function" e deixar o código mais simples
    return 2 * a
}

dobro = a => 2 * a //return implícito 
console .log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
console.log(ola())