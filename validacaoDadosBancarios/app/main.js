import { newAccount } from './newAccount.js';
import itsAge from './ageLegal.js';
import menssages from './menssagesErro.js';
import itsCpf from './validedCpf.js';

const datasForms = document.querySelectorAll('[required]')
const forms = document.querySelector('[data-formulario]')
const sendButton = document.querySelector('[data-botao-enviar]')

forms.addEventListener('submit', (e) => {
    e.preventDefault();

    const listDatas = {
        'nome': e.target.elements['nome'].value,
        'email': e.target.elements['email'].value,
        'rg': e.target.elements['rg'].value,
        'cpf': e.target.elements['cpf'].value,
        'aniversario':e.target.elements['aniversario'].value
    }

    localStorage.setItem('registerClient', JSON.stringify(listDatas));

    window.location.href = './abrir-conta-form-2.html';
})

const typeErros = [
    'valueMissing',
    'TypeMismatch',
    'patterMismatch',
    'tooLong',
    'tooShort',
    'rangeUnderflow',
    'customError',
    'badInput',
    'stepMismatch',   
]

datasForms.forEach((field) => {
    field.addEventListener('blur', () => validField(field))
    field.addEventListener('invalid', (event) => event.preventDefault())
})

//validação de dados
function validField(field){
    let menssage = ''
    field.setCustomValidity('');
    if (field.name === 'cpf' && field.value.length >= 11){
        if (itsCpf(field)){
            console.log('Cpf OK')
        }
    }
    if (field.name === 'rg' && field.value.length >= 8){
        if (newAccount.itsRg(field)){
            console.log('RG ok')
        }
    }
    if (field.name === 'aniversario' && field.value != ''){
        if (itsAge(field)){
            console.log('Age ok')
        }
    }


    typeErros.forEach(erro => {
        if(field.validity[erro]){
            menssage = menssages[field.name][erro];
        }
    })

    const menssageErro = field.parentNode.querySelector('.mensagem-erro');
    const validatyInput = field.checkValidaty();

     if (!validatyInput){
        menssageErro.textContent = menssage;
     }else{
        menssageErro.textContent = '';
     }
}