//Elabore um programa que leia um número e verifique se ele é ou não perfeito. Um número dito perfeio é aquele que é igual à soma dos seus divisores inteiros (exeto o próprio número).

let numero, numPerfeito = 0 
// 6 -> 6 / 1 = 0 | 6 / 2 = 0 | 6 / 3 = 0 | 6 / 4 = N | 6 / 5 = N | 6 / 6 = 0

do {
    numero = parseInt(prompt("Digite um número para saber se ele é perfeito"))
    if(numero <= 0 || isNaN(numero)){
        alert("Número digitado imválido.")
    }
} while (numero <= 0 || isNaN(numero));

for ( let i = 1; i < numero; i++){
    if(numero % i === 0){
        numPerfeito = numPerfeito + i
    }
}
if (numPerfeito === numero){
    document.write(`O número ${numero} é um número perfeito`)
} else {
    document.write(`O número ${numero} não é um número perfeito`)
}


/* Verificação do programa:

do {
    numero = parseInt(prompt("Digite um número para saber se ele é perfeito"))
    if(numero <= 0 || isNaN(numero)){
        alert("Número digitado imválido.")
    }
} while (numero <= 0 || isNaN(numero));
*/

/* Guarda a soma dos divisores: 
numPerfeito = numPerfeito + i
*/

/*  Verifica se o número é perfeito:

if (numPerfeito === numero){
    document.write(`O número ${numero} é um número perfeito`)
} else {
    document.write(`O número ${numero} é um número perfeito`)
}
*/