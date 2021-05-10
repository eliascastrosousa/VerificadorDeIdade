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
    msg.innerHTML = `Você tem ${idade} Anos. `
     
    
    if (anonasc > anoatual || anonasc < 1900) {
        window.alert('Tente novamente com um valor Valido!')
    }
    
    else if (idade >= 0 && idade <= 12 ){
        img.src = '../imagens/bebemenino.jpg'
    }

    else if (idade >12 && idade <= 17  ){
        img.src = '../imagens/adolescentenegro.jpg'
    }

    else if (idade > 17 && idade <= 28  ){
        img.src = '../imagens/jovemhomemnegro.jpg'
    }
    else if (idade > 28 && idade <=59 ){
        img.src = '../imagens/adultamulher.jpg'
    }
    else if (idade >= 60  ){
        img.src = '../imagens/idosohomem.jpg'
    }
   

}