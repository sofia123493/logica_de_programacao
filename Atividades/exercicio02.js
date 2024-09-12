//Digamos que o número de chinchilas de uma fazenda triplica a cada ano, após o primeiroo ano. Elabore um programa que leia o número inicial de chinchilas e anos e informe ano ano o número médio previso de chinchilas da fazenda. Validar para que o número inicial de chinchilas seja maior ou igual a 2.

let qtdChinchilas, anosFazenda
let totalChinchilas = 1

do {
    qtdChinchilas = parseInt(prompt("Digite a quantidade de Chinchilas"))
    if(qtdChinchilas < 2 || isNaN(qtdChinchilas)) {
        alert("O número de Chinchilas deve ser maior ou igual a 2.")
    }
    }while (qtdChinchilas < 2 || isNaN(qtdChinchilas));
do{
    anosFazenda = parseInt(prompt("Por quantos anos você irá criar chinchilas?"))
    if(anosFazenda < 2 || isNaN(anosFazenda)){
        alert("Tempo de criação inválido")
    }
} while (anosFazenda < 2 || isNaN(anosFazenda));
document.write(`Quantidade de Chinchilas: ${qtdChinchilas}, tempo de criação: ${anosFazenda}`)

totalChinchilas = qtdChinchilas

for (let i = 2; i <= anosFazenda; i++) {
    totalChinchilas = totalChinchilas * 3
    document.write("<br>" + totalChinchilas)
    
}
    document.write(`<br> Ao final de ${anosFazenda} anos, você irá ter o total de ${totalChinchilas} Chinchilas`)