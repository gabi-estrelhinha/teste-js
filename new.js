function Elemento (nome,tipo){
    
    this.nome = nome;
    this.tipo = tipo;

    this.exibirInformacoes = function(){
        return ` ${this.nome} ${this.tipo}`
    }
}

const newElemento = new Elemento('piscina', 'borda infinita');

console.log(newElemento.exibirInformacoes());

//operador cria instancias de objetos a partir de uma função construtora, que é uma função que serve como molde para criar objetos.