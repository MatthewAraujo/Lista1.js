/*1. Faça um código que receba um numero n do usuário e imprima os n
primeiros números da sequência de Fibonacci.*/
/*
2. Faça um código que receba um numero inteiro e o fatore.
*/
/*
3.Faça um programa que imprima na tela os números de 1 a 20, um abaixo
do outro. Depois modifique o programa para que ele mostre os números um
ao lado do outro.
let a = 0
for (i = 0; i < 20; i++) {
    //document.write(`${a+1}`) ao lado do outro
    document.write(`${a+1}`) // Um embaixo do outro
    a += 1
}
*/
/*
4. Faça um programa  que peça um nota entre 0 e 10. Mostre uma mensagem
caso o valor seja inválido e continue pedindo até que o usuário informe
um valor válido.*/
let chances = 1
for (i = 0; i < chances; i++) {
    var n = +(prompt('Digite um numero entre 0 a 10'))
    if (n > 10) {
        alert("numero errado tente de novo")
        chances += 1
    }
}