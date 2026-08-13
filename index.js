import Elemento from './Elemento.js';
import Atributo1 from './Atributo1.js'
import Atributo2 from './Atributo2.js'

const novoElemento = new Elemento('ponte', 'ferro', 'cor é dourada', 'Elemento1');
console.log(novoElemento)
console.log(novoElemento.exibirInformacoes());

//novoElemento.#nome = 'ponte de madeira';
//console.log(novoElemento.exibirInformacoes());
//console.log(novoElemento.#nome);