import Livro from "./model/livro";

const livro = new Livro("Dom Quixote", 99.99, 0.1);
console.log(livro.precoComDesconto());
