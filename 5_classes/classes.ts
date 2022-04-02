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

  // método chama com this
  precoComDesconto(): number {
    return this.preco * (1 - this.desconto);
  }

  public resumo(): string {
    return `${this.nome} custa R$${this.precoComDesconto()}`;
  }
}

const produto1 = new Produto("Banana", 1.99);
produto1.desconto = 0.06;
console.log(produto1.resumo());

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

class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }

    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alterarVelocidade(5);
  }

  public frear(): number {
    return this.alterarVelocidade(-5);
  }
}

const carroAdicionado = new Carro("Ferrari", "Enzo", 320);

// ============ Herança ============== //
class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super("Ferrari", modelo, velocidadeMaxima);
  }

  public acelerar(): number {
    return this.alterarVelocidade(30);
  }

  public frear(): number {
    return this.alterarVelocidade(-40);
  }
}

const f50 = new Ferrari("F50", 350);
console.log(`${f50.marca} ${f50.modelo}`);
console.log(f50.acelerar());
console.log(f50.acelerar());
console.log(f50.acelerar());
console.log(f50.frear());

// ======== Getters & Setters =========//
class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
    if (valor >= 0 && valor <= 120) {
      this._idade = valor;
    }
  }
}

const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1);

// ======== ? =========//
class Matematica {
  static PI: number = 3.1416;

  static areaCirc(raio: number): number {
    return this.PI * raio * raio;
  }
}

console.log(Matematica.areaCirc(4));

// ======== Classe abstrada =========//
abstract class Calculo {
  protected resultado: number = 0;

  abstract executar(...numeros: number[]): void;

  getResultado(): number {
    return this.resultado;
  }
}

class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t + a);
  }
}

class Multiplicacao extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t * a);
  }
}

let c1 = new Soma();
c1.executar(2, 3, 5);
console.log(c1.getResultado());

// ======== Singleton =========//
class Unico {
  private static instance: Unico = new Unico();
  private constructor() {}

  static getInstance(): Unico {
    return Unico.instance;
  }

  agora() {
    return new Date();
  }
}

console.log(Unico.getInstance().agora());

// ======== Readonly =========//
class Aviao {
  public readonly modelo: string;

  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo;
  }
}
const turboHelice = new Aviao("Tu-114", "PT-ABC");
console.log(turboHelice);
