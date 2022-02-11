const valor = 'Global'// por causa do contexto léxico em que foi escrita, a função será chamada 'Global' e não local, por que o javascript entende o contexto que ele foi escrita.

function minhaFuncao (){
    console.log(valor)
}

function exec() {
    const valor ='Local'
    minhaFuncao()
}

exec()