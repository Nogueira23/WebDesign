const repeatCpf = ['00000000000','11111111111','22222222222','33333333333','44444444444','55555555555','66666666666','77777777777','88888888888','99999999999',
]

const repeatRg = [
    '00000000', '11111111','22222222','33333333','44444444','55555555','66666666','77777777','88888888','99999999',]

const erroCpf = document.querySelector('#erroCpf');
const erroRg = document.querySelector('#erroRg');

function itsRg(field){
    const rg = field.value.replace(/\.|-/g, "");
    if (repeatRg.includes(rg)){
        field.validityState['customError'] = true;
        return false;
    }
    return true;

}

export const newAccount = {
    itsRg,
}