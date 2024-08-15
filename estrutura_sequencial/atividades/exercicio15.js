let salario, aumento, final

salario = parseFloat(prompt("Insira o valor do seu salário: "))
aumento = parseFloat(prompt("Insira o percentual do seu aumento: "))

final = salario + (salario * (aumento / 100))

document.write("O valor do seu antigo salário é: " + salario + " reais.")
document.write("<br> " + "O percentual do seu aumento é: " + aumento + "%" + "</br>")
document.write("O valor do seu novo salário será: " + final + " reais.")