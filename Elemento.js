export default class Elemento {

    #nome
    #tipo
    #obs
    #role

    constructor(nome, tipo, obs, role) {

        this.#nome = nome
        this.#tipo = tipo
        this.#obs = obs
        this.#role = role || 'Elemento1'
    }

    exibirInformacoes() {
        
        return ` ${this.#nome} ${this.#tipo} ${this.#obs} ${this.#role}`
    }
}

const novoElemento = new Elemento('piscina', 'borda infinita', 'cor é rosa', 'Elemento1');

console.log(novoElemento)
console.log(novoElemento.exibirInformacoes());

// verificar cadeia de prototipos, se o objeto é um prototipo de outro objeto
/* console.log(Elemento.prototype.isPrototypeOf(novoElemento)); */
 //true, novoElemento é um prototipo de Elemento 