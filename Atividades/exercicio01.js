//faça um progama que receba um número e informe se ele é ou não primo. Apenas para relembrar, um número primo é aquele que possui apenas 2 divisores: 1 e ele mesmo.

let numero

do {
    numero = parseInt(prompt("Insira um número"))
    if((numero % 5 == 0 || numero % 2 == 0 )){
        document.write(numero + " não é um número primo")
    } else{
        document.write(numero + " é um número primo")
    }
} while (numero % 5 == 1 && numero % 2 == 1 );
