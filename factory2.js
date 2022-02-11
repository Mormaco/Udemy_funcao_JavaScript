function criarProduto(nome, preco) {
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('notebook', 2999.00))
console.log(criarProduto('kindle', 350.00))