class Data {
  dia: number;
  mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data(); // pode omitir os ()
casamento.ano = 2017;
console.log(casamento);

class DataEsperta {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) {}
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);

const casamentoEsperto = new DataEsperta(); // pode omitir os ()
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);

// Desafio Classe Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs.: Criar dois produtos: passando dois e três params

class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}
}

const produto1 = new Produto("Banana", 1.99);
produto1.desconto = 0.06;
console.log(produto1);

const produto2 = new Produto("Melancia", 3.99, 0.5);
console.log(produto2);

class Cachorro {
  constructor(public nome: string, public raca: string, public cor: string) {}

  public resumo(): string {
    return `${this.nome} é um cachorro da raça ${this.raca} da cor ${this.cor}`;
  }
}

const cachorro1 = new Cachorro("Thor", "Boxer", "Branco");
console.log(cachorro1);
console.log(cachorro1.resumo());
