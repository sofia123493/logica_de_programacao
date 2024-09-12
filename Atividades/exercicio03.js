//Elabore um programa que leia um número e verifique se ele é ou não perfeito. Um número dito perfeito é aquele que é igual a soma dos seus divisores inteiros (exceto o p´roprio número).

let numero = parseInt(prompt("Insira um número"))

let acumuladora = 0

document.write("O número escolhido foi: " + numero + "<br> ")

for(let i = 0; i <= numero; i++){

    if (numero % i == 0) {
        
       
        if(i == numero){
            break
        }
        document.write( i + " ,")
        
    }
}
document.write(" = " + numero)

 
if (i = numero) {
    document.write(`<br> ${numero} é um número perfeito`)
} else {
    document.write(`<br> ${numero} não é um número perfeito`)
}document.write("Acumuladora: " + acumuladora)
