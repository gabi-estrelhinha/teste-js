const elemento = {

    nome: 'piscina',
    largura: '5',
    tipo: 'borda infinita',
    local: 'casa',

    exibirIinformacoes: function() {
        console.log(this.nome, this.largura, this.tipo, this.local);
    }
}

elemento.exibirIinformacoes();