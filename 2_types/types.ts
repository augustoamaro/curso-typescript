// string
let nome: string = "João";
console.log("Nome: ", nome);

// number
let idade: number = 17;
console.log("Idade:", idade);

// boolean
let aprendendo: boolean = true;
console.log(aprendendo);

// tipo explícitos
let minhaIdade: number;
minhaIdade = 27;
console.log(typeof minhaIdade);

// minhaIdade = '27';
// console.log(typeof minhaIdade);

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
console.log(hobbies);

// tuplas
let endereco: [string, number] = ["Av Principal", 2325];
console.log(endereco);

endereco = ["Rua Importante", 1260];
console.log(endereco);

// enums - valores pre-definidos
enum Cor {
  Cinza, // 0
  Verde = 500, // 1
  Azul = 2, // 2
  Laranja,
  Amarelo,
  Vermelho = 100,
}

let minhaCor: Cor = Cor.Verde;

console.log("Cor: ", minhaCor);
console.log("Cor: ", Cor.Azul);
console.log("Cor: ", Cor.Laranja, Cor.Amarelo);
console.log("Cor: ", Cor.Verde, Cor.Vermelho);

// any
let carro: any = "BMW";
console.log(carro);
carro = {
  marca: "BMW",
  ano: 2022,
};

console.log(carro);

// funções
function retornaMeuNome(): string {
  return nome;
}

console.log("Função: ", retornaMeuNome());

function digaOi(): void {
  // tipo vazio
  console.log("Oi", "Oi");
}

digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}

console.log(multiplicar(2, 5));

// tipo função
let calculo: (numeroA: number, numeroB: number) => number;

calculo = multiplicar;
console.log("Calculo: ", calculo(5, 6));

// objetos
let usuario: { nome: string; idade: number } = {
  nome: "João",
  idade: 27,
};

console.log(usuario);

// alias
type Funcionario = {
  supervisores: string[];
  baterPonto: (horas: number) => string;
};

// Desafio 1
let funcionario: {
  supervisores: string[];
  baterPonto: (horas: number) => string;
} = {
  supervisores: ["Ana", "Fernando"],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return "Ponto normal";
    } else {
      return "Fora do horário";
    }
  },
};

let funcionario2: Funcionario = {
  supervisores: ["Bia", "Carlos"],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return "Ponto normal";
    } else {
      return "Fora do horário";
    }
  },
};

console.log(funcionario.supervisores);
console.log("Horário 8h: ", funcionario.baterPonto(13));
console.log("Horario 9h: ", funcionario.baterPonto(5));

// union types
let nota = 10;
console.log(`Minha nota é ${nota}`);

// checando tipos
let valor = 30;

if (typeof valor === "number") {
  console.log("É um valor number");
} else {
  console.log(typeof valor);
}

// never
function falha(msg: string): never {
  throw new Error(msg);
}

const produto = {
  nome: "Sabão",
  preco: 4,
  validarProduto() {
    if (!this.nome || this.nome.trim().length === 0) {
      falha("Precisa ter um nome");
    }
    if (this.preco <= 0) {
      falha("Preço inválido");
    }
  },
};

produto.validarProduto();
// altura = null

let altura = 12;
let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
  nome: string;
  tel1: string;
  tel2: string | null;
};

const contato1: Contato = {
  nome: "Fulano",
  tel1: "9834789",
  tel2: null,
};

console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);

let podeSerNulo = null; // any
podeSerNulo = 12;
console.log(podeSerNulo);

// Desafio 2
type ContaBancaria = {
  saldo: number;
  depositar: (valor: number) => void;
};

let ContaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number) {
    this.saldo += valor;
  },
};

type Correntista = {
  nome: string;
  contaBancaria: ContaBancaria;
  contatos: ["3455454", "99898987"];
};

let correntista = {
  nome: "Jurandir",
  contaBancaria: ContaBancaria,
  contatos: ["3455454", "99898987"],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
