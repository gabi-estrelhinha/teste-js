const elemento = {

    nome: 'piscina',
    largura: '5',
    tipo: 'borda infinita',
    local: 'casa',

    exibirIinformacoes: function() {
        console.log(this.nome, this.largura, this.tipo, this.local);
    }
}

//elemento.exibirIinformacoes();

//const exibir = elemento.exibirInformacoes
//exibir();

const exibir = function() {
    console.log(this.nome, this.largura, this.tipo, this.local);
}
const exibirNome = exibir.bind(elemento);
exibirNome();