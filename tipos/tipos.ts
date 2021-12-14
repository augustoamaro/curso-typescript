// string
let nome: string = 'João';
console.log(nome);

// number
let idade: number = 17;
console.log(idade);

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

endereco = ["Rua Importante", 1260]
console.log(endereco);

// enums
enum Cor {
    Cinza, // 0
    Verde = 100, // 1
    Azul = 2,// 2
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor);

console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);

// any
let carro: any = 'BMW'
console.log(carro);
carro = {
    marca: 'BMW',
    ano: 2022
 }

 console.log(carro);
