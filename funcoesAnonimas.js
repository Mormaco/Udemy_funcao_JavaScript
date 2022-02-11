const soma = function (x, y) {//função anônima não recebe nome
    return x + y

}

const imprimiResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimiResultado(3, 4)//7
imprimiResultado(3, 4, soma)//7
imprimiResultado(3, 4, function (x, y){
    return x - y //-1
})
imprimiResultado(3, 4, (x, y) => x * y)//12

const pessoa = {
    falar: function (){
        console.log('Opa')
    }
}

pessoa.falar