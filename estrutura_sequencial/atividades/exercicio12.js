let venda, custo, percent

custo = parseFloat(prompt("Qual foi o custo do produto? "))
percent = parseFloat(prompt("Qual é o percentual aplicado no roduto?"))

venda = custo + (custo * percent / 100)

document.write("O custo do produto foi: " + custo + " reais." )
document.write(" <br> " + "O percentual aplicado ao valor do custo foi: " + percent + "%" + "</br>")
document.write("O valor atual do produto é: " + venda + " reais."  )