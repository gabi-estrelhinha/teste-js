import Elemento from './Elemento.js';

export default class Atributo1 extends Elemento {

    constructor(nome, tipo, obs, role) {
        super(nome, tipo, obs, role)
    }

    criarSubElemento(nomeSubElemento, tipo, obs) {
        return `elemento ${nomeSubElemento} criado com sucesso, do tipo ${tipo} e com a observação: ${obs}, role: ${this.role}`
    }
}

const atributo1 = new Atributo1('cachoeira', 'grande', 'com pedras', 'Atributo1');
console.log(atributo1)
console.log(atributo1.criarSubElemento('canos', 'ferro', 'canos maleaveis, 3 canos de 1 metro cada', 'subElemento1'));