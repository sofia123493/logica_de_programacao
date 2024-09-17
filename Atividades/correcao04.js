// Elabore um programa que leia um número N e que indique quantos valores inteiros e positivos devem se lidos a seguir. Para cada número lido, mostre o valor lido e o fatorial desse valo.

let qtdNumero, numeroEscolhido, fatorial = 0

 //Serve para garantir que o número que o usuário escolha seja válido:
do {
    qtdNumero = parseInt(prompt("Quantos números faoriais você deseja saber?"))
    if(qtdNumero <= 0 || isNaN(qtdNumero)){
        alert("Número inválido")
    }
} while (qtdNumero <= 0 || isNaN(qtdNumero));

//Vai ser executado quantas vezes o usuário escoher;
for(let i = 1; i <= qtdNumero; i++){

    //Serve para garantir que o número que o usuário escolha seja válido:
    do {
        numeroEscolhido = parseInt(prompt(`Digite o ${i} º número para saber o fatoral`))

        if(numeroEscolhido <= 0 || isNaN(numeroEscolhido)){
            alert("Número inválido")
        }
    } while (numeroEscolhido <= 0 || isNaN(numeroEscolhido));

    //O fatoial de um número:
    fatorial = 1
    for(let y = 1; y <= numeroEscolhido; y++){
       // 0 = * 1 =  0
        fatorial = fatorial * y
    }
    document.write(`Fatorial de ${numeroEscolhido} é ${fatorial} <br>`)

}


/* A primeira estrutura só vai repetir uma segunda vez, quando a segunda estrutura for positiva:
for(){

    for(){

    }
}
*/
