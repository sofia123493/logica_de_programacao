/**Faça um algoritmo para ler duas variáveis A e B, e efetuar as trocas dos valores de forma que a variável A passe a possuir o valor da
 *  variável B e a variável B passe a possuir o valor da variável A. Apresente na tea os dois valores trocados (antes AB, depois AB)
 */

let vA, vB, troca
vA = parseInt(prompt("Digite o valor da variável A: "))
vB = parseInt(prompt("Digite o valor da variável B: "))

document.write("Variável A : " + vA + "<br>")
document.write("Variável B : " + vB + "<br>")

troca = vA

document.write("<strong> Trocando o valor das variáveis:  </strong> <br> ")

vA = vB
document.write("A variável A passa a ter o valor de: " + vA + "<br>")
vB = troca
document.write("A variável B passa a ter o valor de: " + vB)