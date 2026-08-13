const elemento = {

    nome: 'piscina',
    largura: '5',
    tipo: 'borda infinita',
    local: 'casa',

    exibirIinformacoes: function() {
        console.log(this.nome, this.largura, this.tipo, this.local);
    },
};

const caracteristica1 = {

    nome: 'borda',
    largura: '1',
    tipo: 'infinita',
    local: 'casa',

    criarCaracteristica: function() {
        console.log('caracteristica criada com sucesso');
    },
};

Object.setPrototypeOf(caracteristica1, elemento);
//caracteristica1 usa como base o objeto elemento, ou seja, herda as caracteristicas do objeto elemento
//primeiro parametro pega, segundo fornece

caracteristica1.criarCaracteristica();
caracteristica1.exibirIinformacoes();