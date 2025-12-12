//1- Peça uma temperatura em graus Celsius e converta para Fahrenheit usando a fórmula: F = (9 * C + 160) / 5.//feito
//2- Peça dois números e diga qual é o maior.//feito
//3- Peça o peso de 5 pessoas e calcule a média dos pesos. (Utilize estrutura de repetição)//feito
//4- Peça três números e diga qual é o menor.//feito
//5- Peça a quantidade de termos da sequência de Fibonacci e imprima até esse termo.//feito


const escolha = Number(prompt("Digite um número para fazer 1.(temperatura), 2.(Maior nº), 3.(Média), 4.(Menor nº) ou 5.(Fibonacci):"))

if(escolha == 1){
    alert("Conversão de Celsius para  Fahrenheit")
    const C =Number(prompt("Digite uma temperatura °C para converter °F:"))
    const F = (9 * C + 160) / 5
    const resultado = F
    alert(" A conversão de graus Celsius  " + C +"°C  em graus Fahrenheit para é : "+ resultado +"°F")

}
else if(escolha == 2){
    let num = Number(prompt('Informa qual é maior número entre dois números : \n Digite um número:'))
    let num1= Number(prompt('Digite outro número:'))
    if(num < num1){
    alert("O  segundo número : "+num1+"; É maior do que primeiro  número: "+num)
}
else{
    alert("O primeiro número : "+num+"; É maior do que segundo número: " +num1)
}

}
else if( escolha == 3){
    alert("A média de 5 pesos:")
    let soma = 0
    for (let i = 1; i <= 5; i++) {
        let peso = Number(prompt("Digite o peso " + i + ":" ))
        soma = soma + peso
    }
    let media = soma / 5
    alert("A média dos 5 pesos é: " + media.toFixed(2))
   
}
else if(escolha == 4){   
    let num = Number(prompt('Informa qual é menor número entre 3 números: \n Digite um número:'))
    let num1= Number(prompt('Digite outro número:'))
    let num2= Number(prompt('Digite outro número:'))
    if(num <= num1 && num <= num2){
        alert("O primeiro número : "+num+"; É menor do que segundo número: " +num1+" e terceiro número:  "+num2)
}
    else if(num1<= num && num1<= num2){
        alert("O  segundo número : "+num1+"; É menor do que primeiro  número: "+num+" e terceiro número:  "+num2)
}
    else {
    alert("O  terceiro número : "+num2+"; É menor do que primeiro  número: "+num+" e segundo número:  "+num1)
}}
else if(escolha == 5){
   let n = Number(prompt("Digite qual termo da sequência você quer:"))
   let a = 0
   let b = 1
   let soma
   let resultado = "0, 1"
   if (n === 0) {
    alert("O termo 0 é: 0")
    alert("A sequência completa:\n0")
} 
   else if (n === 1) {
    alert("O termo 1 é: 1")
    alert("A sequência completa:\n0, 1")
}  else {
    for (let i = 2; i <= n; i++) {
        soma = a + b
        resultado += ", " + soma
        a = b
        b = soma
  }
  alert("A sequência completa:\n" + resultado)
  alert("O termo " + n + " é: " + b)
}
}
