function contar(){
    let ini = window.document.getElementById('txtini')
    let fim = window.document.getElementById('txtfim')
    let passo = window.document.getElementById('txtpas')
    let res = window.document.getElementById('res')
    if (ini.value.length == 0||fim.value.length==0||passo.value.length==0) {
        window.alert('[ERRO]Falta dados')
    } else {
        res.innerHTML = `Contando: `
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('[ERRO] nesse caso será considerado passo 1')
            p = 1
        }else if (i < f) {
            for (let contador = i; contador <= f; contador += p) {
                res.innerHTML += `${contador} \u{1F449}`
            }
        } else {
            for (let contador = i; contador >= f; contador -= p) {
                res.innerHTML += `${contador} \u{1F449}`
            }
        }
        
    }res.innerHTML += `\u{1F3C1}`
}