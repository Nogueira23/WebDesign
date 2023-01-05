import menssages from "./menssagesErro.js";

const repeatCpf = ['00000000000','11111111111','22222222222','33333333333','44444444444','55555555555','66666666666','77777777777','88888888888','99999999999',
]

export default function itsCpf(field){
    const cpf = field.value.replace(/\.|-/g, "");
    if (repeatDigits(cpf) || firstDigit(cpf) || secondDigit(cpf)){
        field.setCustomValidity('o CPF digitado não existe!')
        return false;
    }
    return true;
}

function repeatDigits(cpf){
    const repeatCpf = ['00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
]

    return repeatCpf.includes(cpf)
}

function firstDigit(cpf) {
    let sum = 0;
    let factor = 10;

    for (let i = 0; i < 9; i++) {
        sum += cpf[i] * factor;
        factor--
    }

    sum = (sum * 10) % 11;

    if (sum == 10 || sum == 11) {
        sum = 0;
    }

    return sum != cpf[9];
}

function secondDigit(cpf) {
    let sum = 0;
    let factor = 11;

    for (let i = 0; i < 10; i++) {
        sum += cpf[i] *factor;
       factor--
    }

    sum = (sum * 10) % 11;

    if (sum == 10 || sum == 11) {
        sum = 0;
    }

    return sum != cpf[10];
}
