/*
var searchCEP = fetch('https://viacep.com.br/ws/13084643/json/') //Promise
    .then(response => response.json()) // Result
    .then(r => {
        if(r.erro){
            throw Error("That's CEP not exist.") // throw é controle de erro > mandaram o código para o primeiro block catch existente
        }else{
            console.log(r)
        }
    }) // Result
    .catch(erro => console.log(erro))
    .finally(mensege => console.log('Finaly!')) //method for analyses of error
*/
async function FindAddress(cep){
    var menssegeErro = document.getElementById('erro');
    menssegeErro.innerHTML = '';
    try{
        var searchCEPQuicky = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var searchJSON = await searchCEPQuicky.json();
        if (searchJSON.erro){
            throw Error('CEP not exist!');
        }
        var city = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var state = document.getElementById('estado');
        var district = document.getElementById('bairro'); 
        
        district.value = searchJSON.bairro;
        city.value = searchJSON.localidade;
        logradouro.value = searchJSON.logradouro;
        state.value =searchJSON.uf;
        console.log(searchJSON);
        return searchJSON;
    }catch(erro){
        menssegeErro.innerHTML = `
        <p>CEP inválido. Tente novamente!</p>`
        console.log(erro)
    }
}
 
FindAddress();

var cep = document.getElementById('cep')
cep.addEventListener('focusout', () => FindAddress(cep.value));