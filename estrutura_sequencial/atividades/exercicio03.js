let num1, num2, soma, subt, multi, divisao

num1 = parseInt(prompt("Digite o 1º número: "))
num2 = parseInt(prompt("Digite o 2º número: "))

soma = num1 + num2
subt = num1 - num2
multi = num1 * num2
divisao = num1 / num2

document.write("Os valores escolhidos foram: " + num1 + " e " + num2 +"<br>") 
document.write("As operações com os números deram os seguintes resultados: " + " <br>") 
document.write("Soma: " + soma + " <br>") 
document.write("Subtração: " + subt + " <br>")
document.write("Multiplicação: " + multi + " <br>")
document.write("Divisão: " + divisao)
