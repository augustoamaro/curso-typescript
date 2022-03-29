// let & const
let seraQuePode = "?";
console.log(seraQuePode);

let estaFrio = true;
if (estaFrio) {
  let acao = "Colocar o casaco";
  console.log(acao);
}

const cpf: string = "123.456.789.90";
// cpf = '344.546.234.66'
console.log(cpf);

var segredo = "externo!";
function revelar() {
  var segredo = "interno";
  console.log(segredo);
}
revelar();
console.log(segredo);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Arrow Function
const somar = function (n1: number, n2: number): number {
  return n1 + n2;
};

console.log("Soma: ", somar(2, 2));

const subtrair = (n1: number, n2: number) => n1 - n2;
console.log("Subtração: ", subtrair(25, 5));

// this

function normalComThis() {
  // console.log(this);
}

const normalComThisEspecial = normalComThis.bind(3);
normalComThisEspecial();

const arrowComThis = () => {
  // return console.log(this); // window
};

arrowComThis();

// Parâmetros padrão
function contagemRegressiva(
  inicio: number = 3,
  fim: number = inicio - 5
): void {
  console.log(inicio);

  while (inicio > fim) {
    inicio--;
    console.log(inicio);
  }
  console.log("Fim!");
}

contagemRegressiva();
contagemRegressiva(5);

// Spread & Rest (Espalhar)
const numbers = [1, 10, 99, -5];
console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3])); // Jeito antiquado
console.log("Spread:", Math.max(...numbers));

const turmaA: string[] = ["João", "Maria", "Fernanda"];
const turmaB: string[] = ["Fernando", "Miguel", "Lorena", ...turmaA];
console.log(turmaB);

function retornarArray(...args: number[]): number[] {
  return args;
}

const numeros = retornarArray(1, 2, 4, 5, 6);
console.log(numeros);
console.log(retornarArray(...numbers));

// Rest & Spread (Tupla)
const tupla: [number, string, boolean] = [1, "abc", false];

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`);
}

tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]) {
  console.log(Array.isArray(params));
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}

tuplaParam2(...tupla);

// Destructuring (Array)
const caracteristicas = ["UP Extreme 2021", 2021];

// const carro = caracteristicas[0];
// const ano = caracteristicas[1];

const [modelo, ano] = caracteristicas;
console.log(modelo);
console.log(ano);

// Destructuring (Objeto)
const item = {
  nome: "Banana",
  preco: 2.99,
};

const nomeItem = item.nome;
const precoItem = item.preco;
console.log("Jeito Normal: ", nomeItem, precoItem);

const { nome: n, preco: p } = item;
console.log("Destructuring: ", n, p);

// Callback
function esperar3s(callback: (dado: string) => void) {
  setTimeout(() => {
    callback("3s depois...");
  }, 3000);
}

esperar3s(function (resultado: string) {
  console.log(resultado);
});

//Promise
function esperar3sPromise() {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve("3s depois promise...");
    }, 3000);
  });
}

esperar3sPromise().then((dado) => console.log(dado));
