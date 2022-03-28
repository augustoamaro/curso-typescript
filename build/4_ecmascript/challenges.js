"use strict";
// Exercicio 1
const dobro = (valor) => valor * 2;
console.log("Exercicio 1: ", dobro(10));
// Exercicio 2
const dizerOla = function (nome = "Pessoa") {
    console.log("Exercicio 2: ", `Olá, ${nome}`);
};
dizerOla("Anna");
// Exercicio 3
const nums = [-3, 33, 38, 5];
// Imprimir o menor valor
console.log("Exercicio 3: ", Math.min(...nums));
// Exercicio 4
const array = [55, 20];
// Adicionar todos os elementos de "nums" em array
array.push(...nums);
console.log("Exercicio 4: ", array);
// Exercicio 5
const notas = [8.5, 6.3, 9.4];
// var nota1 = notas[0];
// var nota2 = notas[1];
// var nota3 = notas[2];
const [n1, n2, n3] = notas;
console.log("Exercicio 5: ", notas);
// Exercicio 6
const cientista = { primeiroNome: "Will", expeciencia: 12 };
// var primeiroNome = cientista.primeiroNome;
// var expeciencia = cientista.expeciencia;
// console.log("Exercicio 6: ", primeiroNome, expeciencia);
const { primeiroNome, expeciencia } = cientista;
console.log("Exercicio 6: ", cientista);
console.log(primeiroNome, expeciencia);
