"use strict";
// string
let nome = "João";
console.log("Nome: ", nome);
// number
let idade = 17;
console.log("Idade:", idade);
// boolean
let aprendendo = true;
console.log(aprendendo);
// tipo explícitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = '27';
// console.log(typeof minhaIdade);
// array
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);
// tuplas
let endereco = ["Av Principal", 2325];
console.log(endereco);
endereco = ["Rua Importante", 1260];
console.log(endereco);
// enums - valores pre-definidos
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 500] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log("Cor: ", minhaCor);
console.log("Cor: ", Cor.Azul);
console.log("Cor: ", Cor.Laranja, Cor.Amarelo);
console.log("Cor: ", Cor.Verde, Cor.Vermelho);
// any
let carro = "BMW";
console.log(carro);
carro = {
    marca: "BMW",
    ano: 2022,
};
console.log(carro);
// funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    // tipo vazio
    console.log("Oi");
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 5));
// tipo função
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos
let usuario = {
    nome: "João",
    idade: 27,
};
console.log(usuario);
// Desafio 1
let funcionario = {
    supervisores: ["Ana", "Fernando"],
    baterPonto(horario) {
        if (horario <= 8) {
            return "Ponto normal";
        }
        else {
            return "Fora do horário";
        }
    },
};
let funcionario2 = {
    supervisores: ["Bia", "Carlos"],
    baterPonto(horario) {
        if (horario <= 8) {
            return "Ponto normal";
        }
        else {
            return "Fora do horário";
        }
    },
};
console.log(funcionario.supervisores);
console.log("Horário 8h: ", funcionario.baterPonto(8));
console.log("Horario 9h: ", funcionario.baterPonto(5));
// union types
let nota = 10;
console.log(`Minha nota é ${nota}`);
// checando tipos
let valor = 30;
if (typeof valor === "number") {
    console.log("É um valor number");
}
else {
    console.log(typeof valor);
}
// never
function falha(msg) {
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
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
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
let ContaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    },
};
let correntista = {
    nome: "Jurandir",
    contaBancaria: ContaBancaria,
    contatos: ["3455454", "99898987"],
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=types.js.map