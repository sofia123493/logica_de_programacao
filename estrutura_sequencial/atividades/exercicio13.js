let salario, aumento

salario = parseFloat(prompt("Qual é o valor do seu salário?"))

aumento = salario + (salario * (25/100))

document.write("<br>" + "O valor do seu antigo salário é: " + salario + "</br>")
document.write("O valor do seu novo salário é: " + aumento)