//alert('Olá Mundo!')
function confirmar(){
    var anoinput = document.getElementById('ano')
    var anonasc = Number(anoinput.value)
    var data = new Date()
    var anoatual = data.getFullYear()
    var idade = anoatual-anonasc
    var msg = document.getElementById('observacao')
    var img = document.getElementById('imagem')
    var sexo = document.getElementsByName('sexo')
    
     
    
    if (anonasc > anoatual || anonasc < 1900) {
        window.alert('Tente novamente com um valor Valido!')
    }
    
    else if (idade >= 0 && idade <= 12 ){
        img.src = 'imagens/bebemenina.jpg'
        msg.innerHTML = `Você é uma criança de ${idade} Anos. `
    }

    else if (idade >12 && idade <= 17  ){
        img.src = 'imagens/adolescentemenino.jpg'
        msg.innerHTML = `Você é um adolescente de ${idade} Anos. `
    }

    else if (idade > 17 && idade <= 28  ){
        img.src = 'imagens/homemjovem.jpg'
        msg.innerHTML = `Você é um jovem de ${idade} Anos. `
    }
    else if (idade > 28 && idade <=59 ){
        img.src = 'imagens/mulheradulta.jpg'
        msg.innerHTML = `Você é um Homem adulto de ${idade} Anos. `
    }
    else if (idade >= 60  ){
        img.src = 'imagens/homemidoso.jpg'
        msg.innerHTML = `Você é um senhor de ${idade} Anos. `
    }
   

}