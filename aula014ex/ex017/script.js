function tabuada(){
    var textoNumero = document.getElementById('txtn')//armzena o numero digitado pelo usuário
    var tabuada = document.getElementById('selTab')//
    if(textoNumero.value.length == 0){
        window.alert('ERRO!!! digite o numero para começar')
    }else{
        numero = Number(textoNumero.value) //converte texto para numero
        tabuada.innerHTML=''//limpa a tabuada antes de iniciar
        for(var contador = 1; contador<=10; contador++){
            var item = document.createElement('option')
            item.text = `${numero }x${ contador }=${ numero*contador}`
            item.value = `tabuada${contador}`
            tabuada.appendChild(item)

        }
        

    }
}