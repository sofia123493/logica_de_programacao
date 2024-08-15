let produto, venda, acrescimo

produto = parseFloat(prompt("Insira o preço de custo do produto: "))
acrescimo = parseFloat(prompt("Insira o valor do acréscimo: "))

venda = produto + (produto * (acrescimo / 100))

document.write("O preço de custo do produto é: " + produto + " reais.")
document.write("<br> " + "O valor do acréscimo é: " + acrescimo + " %." + "</br>")
document.write("O preço de venda desse produto é: " + venda + " reais.")