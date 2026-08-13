import Elemento from './Elemento.js';

export default class Atributo2 extends Elemento {

    constructor(nome, tipo, obs, role = 'Atributo2') {
        super(nome, tipo, obs, role)
    }

    criarSubElemento(nomeSubElemento, tipo, obs) {
        return `elemento ${nomeSubElemento} criado com sucesso, do tipo ${tipo} e com a observação: ${obs}, role: ${this.role}`
    }
}

const atributo2 = new Atributo2('azulejo', 'cerâmica', 'com desenhos geométricos', 'Atributo2');
console.log(atributo2)
console.log(atributo2.criarSubElemento('desenhos', 'tinta', 'tinta resistente à água', 'subElemento2'));