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