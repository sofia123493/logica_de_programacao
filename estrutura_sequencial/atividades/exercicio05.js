//Faça um algoritmo que receba três notas, calcule e mostre a média aritmética entre elas (mostrar a média).   

let nota1, nota2, nota3, media

nota1 = parseInt(prompt("Digite a 1º nota: "))
nota2 = parseInt(prompt("Digite a 2º nota: "))
nota3 = parseInt(prompt("Digite a 3º nota: "))

media = (nota1 + nota2 + nota3) / 3

document.write("A média das notas digitadas é: " + media)