let botao = document.getElementById("click")
botao.addEventListener("click", clicar)
let numeros = []
function clicar(){
    const input = document.getElementById("numero")
    const numero = input.value
    let p1 = document.getElementsByClassName("paragrafo")[0]
    let p2 = document.getElementsByClassName("paragrafo")[1]
    let p3 = document.getElementsByClassName("paragrafo")[2]
    let p4 = document.getElementsByClassName("paragrafo")[3]
    let p5 = document.getElementsByClassName("paragrafo")[4]
    let pequeno = document.getElementById("pequeno")
    if (numero > 100 || numero < 1){
        pequeno.innerHTML = "Número inválido!"
        return
    }
    if(numeros.indexOf(numero) != -1){
        pequeno.innerHTML = 'Número já adicionado!'
        return
    }
    numeros.push(numero)
    pequeno.innerHTML = 'Número adicionado!'
    input.value = ""
    input.focus()
    let finalizar = document.getElementById("final")
     if(numeros.length === 1){
        p1.innerHTML = `Ao todo ${numeros.length} número foi adicionado.`
     }else{
        p1.innerHTML = `Ao todo ${numeros.length} números foram adicionados.`
     }
     if(numeros.length > 4){
        finalizar.style.display = "inline-block"
     }
     finalizar.addEventListener("click", interna)
     function interna(){
        let maior = numeros[0]
        let menor = numeros [0]
        let soma = numeros [0]
        for (let i = 0 ; i < numeros.length ; i++){
            if (numeros[i] > maior){
                maior = numeros[i]
            }
            if(numeros[i] < menor){
                menor = numeros[i]
            }
        }
        for(let c = 0 ; c < numeros.length ; c++ ){
            soma += numeros[c]
        }
        let media = soma / numeros.length
        p2.innerHTML = `O maior número cadastrado foi ${maior}.`
        p3.innerHTML = `O menor número cadastrado foi ${menor}`
        p4.innerHTML = `A soma de todos os numeros adicionados foi ${soma}`
        p5.innerHTML = `A média de todos os números é de ${media}`
     }
}
