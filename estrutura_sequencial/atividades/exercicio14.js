let salario, vendas, salarioF
let nome

nome = prompt("Digite o seu nome:")
salario = parseFloat(prompt("Insira o valor do seu salário: "))
vendas = parseFloat(prompt("Digite o total de vendas efetuadas por você durante esse mês, em reais: "))

salarioF = salario + (salario * (15 / 100))

document.write("Olá, " + nome + ". ")
document.write("<br>" + "Seu salário fixo é: " + salario + " reais." + "<br>" )
document.write( "Seu salário final, esse mês será: " + salarioF + " reais")