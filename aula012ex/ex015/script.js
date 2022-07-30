function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoDigitado = window.document.getElementById('txtano')
    var res = window.document.getElementById('resultado')
    if(anoDigitado.value.length == 0 || Number(anoDigitado.value) > ano || Number(anoDigitado.value) < 1900){
        window.alert("ERRO tente novamente")
    } else {
       var sexMarcado = window.document.getElementsByName('radsex')
       var idade = ano - Number(anoDigitado.value)
       var gênero = ''
       var img = window.document.createElement('img')
       img.setAttribute('id','foto')
       if(sexMarcado[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade <= 12){
                img.setAttribute('src','criança-menino.jpg')
                //Criança
            }else if(idade <= 18){
                img.setAttribute('src', 'adolescente-menino.jpg')
                //Adolescente
            }else if(idade <= 59){
                img.setAttribute('src', 'homem-adulto.jpg')
                //Adulto
            }else{
                img.setAttribute('src', 'homem-idoso.jpg')
                //Idoso
            }

       }else if(sexMarcado[1].checked){
            gênero = 'Mulher'
            if(idade >=0 && idade <= 12){
                img.setAttribute('src', 'criança-menina.jpg')
                //Criança
            }else if(idade <= 18){
                img.setAttribute('src', 'adolescente-menina.jpg')
                //Adolescente
            }else if(idade <= 59){
                img.setAttribute('src', 'adulto-mulher.jpg' )
                //Adulto
            }else{
                img.setAttribute('src', 'idoso-mulher.jpg')
                //Idoso
            }
       }
       
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos um(a) ${gênero} com ${idade} anos`
    res.appendChild(img)
}