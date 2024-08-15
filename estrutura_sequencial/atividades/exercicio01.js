/**Faça um algoritmo para mostrar o resultado da soma de 2 números.*/

//1º Entrada de dados

let num1, num2, soma

num1 = parseInt(prompt("Digite o 1º número: "))
num2 = parseInt(prompt("Digite o 2º número: "))

soma = num1 + num2

document.write("A soma dos valores escolhidos é: " + soma)
//Ou
document.write( `A soma de ${numero} + ${numero2} = ${soma}`)