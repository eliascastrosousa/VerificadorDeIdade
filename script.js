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
    
    else if (idade < 11) { 
        if (sexo[0].checked) { //sexo masculino
            msg.innerHTML = `Você é uma criança de ${idade} anos do Sexo Masculino.`
            img.src="imagens/bebemenino.jpg"
            document.body.style.background = '#4FB6E3'
        }
        else { //sexo feminino
            msg.innerHTML = `Você é uma criança de ${idade} anos do Sexo feminino.`
            img.src="imagens/bebemenina.jpg"
            document.body.style.background = '#E6B3DE'
        }
    }
    else if (idade <= 19) {
        if (sexo[0].checked) {
            msg.innerHTML = `Você é um adolescente de ${idade} anos.`
            img.src="imagens/adolescentemenino.jpg"
            document.body.style.background = '#567AD6'
        }
        else {
            msg.innerHTML = `Você é uma adolescente de ${idade} anos.`
            img.src="imagens/adolescentemenina.jpg"
            document.body.style.background = '#F065A4'
        }
    }
    else if (idade <= 26) {
        if (sexo[0].checked) {
            msg.innerHTML = `Você é um jovem homem de ${idade} anos.`
            img.src="imagens/homemjovem.jpg"
            document.body.style.background = '#5632E0'
        }
        else {
            msg.innerHTML = `Você é uma jovem mulher de ${idade} anos.`
            img.src="imagens/mulherjovem.jpg"
            document.body.style.background = '#F02E82'
        }
    }
    else if (idade <= 59) {
        if (sexo[0].checked) {
            msg.innerHTML = `Você é um homem adulto de ${idade} anos.`
            img.src="imagens/homemadulto.jpg"
            document.body.style.background = '#28544E'
        }
        else {
            msg.innerHTML = `Você é uma mulher adulta de ${idade} anos.`
            img.src="imagens/mulheradulta.jpg"
            document.body.style.background = '#F75B62'
        }
    }
    else {
        if (sexo[0].checked) {
            msg.innerHTML = `Você é um senhor de ${idade} anos.`
            img.src="imagens/homemidoso.jpg"
            document.body.style.background = '#553230'
        }
        else {
            msg.innerHTML = `Você é uma senhora de ${idade} anos.`
            img.src="imagens/mulheridosa.jpg"
            document.body.style.background = '#3B1D47'
        }
    }

    

}