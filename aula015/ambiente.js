let num =[5,8,2,9,3]//vetor 'num' com 5 elementos
num[3]=6//acrescenta o elemento '6' na posição [3]
num.push(1)//método para acrescentar elementos no vetor
num.length//atributo length ultilizado para medir o vetor
num.sort()//método para ordenar o vetor
console.log(`nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O ${num[0]} é o primeiro numero do vetor`)
let pos = num.indexOf(7)//método para encontrar um elemento no vetor
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor está na posição ${pos}`)
}


