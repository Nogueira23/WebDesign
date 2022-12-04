const form = document.getElementById('NewItem')
const lista = document.getElementById('lista')
var itens = [];
if (JSON.parse(localStorage.getItem("itens"))){
    itens = JSON.parse(localStorage.getItem("itens"))
}

itens.forEach((elemento) => {
    criaELemento(elemento)
})


form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    // existência do item
    const existe = itens.find( elemento => elemento.nome.toLowerCase() === nome.value.toLowerCase())
    const item = {
        "nome": nome.value,
        "quantidade": quantidade.value
     }

    if (existe){
        item.id = existe.id
        atualizaElemento(item)
        // encontrando o index se o elemento existe
        itens[itens.findIndex(elemento => elemento.id === existe.id)] = item
    }else{
        //syntax para dar valor a um item com condição
        item.id = itens[itens.length - 1] ? (itens[itens.length-1]).id + 1 : 0;
        criaELemento(item)
        itens.push(item)
    }

    localStorage.setItem('itens', JSON.stringify(itens))

    nome.value = ''
    quantidade.value = ''
})

function criaELemento(item){
     const novoItem = document.createElement('li')
     novoItem.classList.add('item')

     const numeroItem = document.createElement('strong')
     numeroItem.innerHTML = item.quantidade
     numeroItem.dataset.id = item.id

     novoItem.appendChild(numeroItem)
     novoItem.innerHTML += item.nome

     novoItem.appendChild(BotaoDeleta(item.id))
     
     lista.appendChild(novoItem)

}

function atualizaElemento(item){
    document.querySelector(`[data-id="${item.id}"`).innerHTML = item.quantidade
}

function BotaoDeleta(itemId){
    const elementoBotao = document.createElement("button")
    elementoBotao.innerHTML = 'X'

    elementoBotao.addEventListener('click', function(){
        deletaElemento(this.parentNode, itemId)
    })

    return elementoBotao
}

function deletaElemento(tag, id){
    tag.remove()

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem("itens", JSON.stringify(itens))
}