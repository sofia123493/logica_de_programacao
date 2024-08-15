//Faça um algoritmo que receba o valor das horas em segundos e transforme em dias, horas e minutos.

let h, m, s, dias 

s = parseInt(prompt( "Digite o valor do tempo desejado em segundos: <br>"))

console.log(m = s/60)
console.log(h = m/60)
console.log(dias = h/24)


document.write(" <strong>" + s + " Segundos, equivalem a: </strong><br> " + dias.toFixed(0) + " Dia(s) <br>")
document.write( h.toFixed(0) + " Hora(s) <br>")
document.write( m.toFixed(0) + " Minuto(s).")