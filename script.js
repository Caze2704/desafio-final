let botao = document.getElementById("click")
botao.addEventListener("click", clicar)
let numeros = []
function clicar(){
    let numero = document.getElementById("numero")
    let n = Number(numero.value)
    let p1 = document.getElementsByClassName("paragrafo")[0]
    let p2 = document.getElementsByClassName("paragrafo")[1]
    let p3 = document.getElementsByClassName("paragrafo")[2]
    let p4 = document.getElementsByClassName("paragrafo")[3]
    let p5 = document.getElementsByClassName("paragrafo")[4]
    let pequeno = document.getElementById("pequeno")
    if (n > 100 || n < 1){
        pequeno.innerHTML = "Número inválido!"
        return
    }
    if(numeros.indexOf(n) != -1){
        pequeno.innerHTML = 'Número já adicionado!'
        quant++
        return
    }
    numeros.push(n)
    pequeno.innerHTML = 'Número adicionado!'
    numero.value = ""
    numero.focus()
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
