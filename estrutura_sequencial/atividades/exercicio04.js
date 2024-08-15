//Faça um algoritmo para determinar o combustível médio de um automóvel sendo fornecida a distância total percorrida pelo automóvel e o total do combustível gasto.

let distancia, combusTotal, media

distancia = parseInt(prompt("Digite a distância percorrida em km: "))
combusTotal = parseInt(prompt("Digite o combustível total utilizado em lítros: "))

media = distancia / combusTotal

document.write("O consumo médio do automóvel é: " + media + "km/l")