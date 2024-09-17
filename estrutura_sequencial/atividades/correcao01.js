//Faça um algoritmo para verificar se o número digitado pelo usuário é um número primo

// 3 / 1 = 0     3 / 2 = N     3 / 3 = 0 | PRIMO
// 4 / 1 = 0     4 / 2 = 2     4 / 3 = N     4 / 4 = 0
// 5 / 1 = 0     5 / 2 = N     5 / 3 = N     5 / 4 = N     5 / 5 = 0 | PRIMO

let numero, contador = 0
// A variável "contador" vai contar quantas vezes o resuado da divisão deu 0.
// O resultado da "contador" deve ser igual a 2 para o número ser primo.

//A gente precisa de uma variável que vá do número 1 ao número que o usuário digitou:

/*for(let i = 1; i <= numero; i++) {
   
    console.log(`Valor de i: ${numero} / ${i} `)
}
*/

//Precisamos que o usuário digite um número válido:

/*
do {
    numero = parseInt(prompt("Digite um número para saber se ele é primo"))
    if(numero <= 0 || isNaN(numero)){
        alert("Digite um número inteiro e maior que 0")
    }
} while (numero <= 0 || isNaN(numero));

*/

// Número que o usuário digitou dividido pelo valor de i.
//Se esse resultado der certo, a variável contador, conta + 1:

/*
if(numero % i === 0){
    contador++
}

*/

do {
    numero = parseInt(prompt("Digite um número para saber se ele é primo"))
    if(numero <= 0 || isNaN(numero)){
        alert("Digite um número inteiro e maior que 0")
    }
} while (numero <= 0 || isNaN(numero));

for(let i = 1; i <= numero; i++) {
    document.write(`${numero} % ${i} = ${numero%i} <br>`)
    if(numero % i === 0){
        contador++}
}

if (contador === 2) {
    document.write(` O número ${numero} é primo`)
} else {
    document.write(` O número ${numero} não é primo`)
}


