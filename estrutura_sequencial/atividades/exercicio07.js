//Faça um algoritmo para ler uma temperatura em Celsius e apresentá-la convertida em graus Fahrenheit.

let C, F

C = parseInt(prompt( "Digite a temperatura em Celsius: <br>"))
F = ((C * (9/5)) + 32)

document.write( " A temperatura em Celsius é: " + C + "C° " + "<br>" + " Em Fahrenheit é: " + F + "F°")