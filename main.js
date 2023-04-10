const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

//boolean
console.log(cidade === inputMinusculo); // true
console.log(cidade === input);//false
let input3 = null;
let input2;

console.log(input3); // null
console.log(input2); // undefined

//length
const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres

//+
const nome1 = "arthur ";
const idade1 =16;

let  registro= nome1+idade1
console.log(registro);//arthur 16

//truthy and falsy
console.log(0 == false);
console.log("" == false);
console.log(1 == true);

// typeoff = perguntar para o js qual o tipo de dado esta sendo armazenado 

console.log(typeof cidade);

// conversão de tipos

let numero1 = 234;
let numero2 = "234";

console.log(numero1 == numero2); //conversão automática //true

console.log(numero1 + numero2); //"234234"
console.log(numero1 + Number( numero2)); //conversão explícita //468

let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings


// diferença somente quando testada no navegador
console.log("deu erro");
console.error("deu erro");

// diferença de erro 
console.error(new Error("deu erro"));