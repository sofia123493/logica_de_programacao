let deposito, juros

deposito = parseFloat(prompt("Insira o valor depositado: "))

juros = deposito*1.07

document.write("O valor depositado foi: " + deposito)
document.write("<br>"+ "O rendimento desse mês foi: " + juros + "</br>")