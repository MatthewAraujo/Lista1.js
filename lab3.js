/*
1. Faça um programa que sortei um numero de 0 a 9999 e mostre na tela cada um dos dígitos separadamente.
exemplo: unidade: 4 dezena: 3 centena: 8 milhar

var a = Math.random() * 9999
document.write(`Sua unidade é ${Math.trunc(a/1000)}`)
document.write(`<br>Sua dezena é ${Math.trunc(a/100)}`)
document.write(`<br>Sua centena é ${Math.trunc(a/10)}`)
document.write(`<br>Seu milhar é ${Math.trunc(a/1)}`)
*/
/*
2. Escreva um programa que faça o computador "pensar"
em um numero inteiro entre 0 e 5 e peça para o usuário tentar descobrir qual foi o numero escolhido pelo computador.O programa deverá escrever na tela se o usuário venceu ou perdeu.
var comp = Math.random() * 5
var usuario = +(prompt("Digite um numero de 0 a 5"))
if (comp.toFixed() == usuario) {
    document.write("jogador acertou")
} else
    document.write("jogador errou")
    */
/* 
3. Faça um programa que leia um ano qualquer e mostre se ele é Bissexto.
*/
var ano = +(prompt('Digite um ano '))
if (ano % 4 == 0) {
    document.write("Esse ano é bisexto")
} else
    document.write('Esse ano nao é bisexto')

/*
4. Faça um programa que leia 3 números e mostre qual é o maior e qual é o menor.
var n1 = +(prompt("Digite um numero: "))
var n2 = +(prompt("Digite um numero: "))
var n3 = +(prompt("Digite um numero: "))

document.write(`O maior numero é ${Math.max(n1,n2,n3)} e o menor numero é ${Math.min(n1,n2,n3)}`)
*/