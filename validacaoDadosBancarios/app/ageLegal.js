import menssages from "./menssagesErro.js"
const erroAge = document.getElementById('erroAge')

function validedAge(date){
    const dateCurrent = new Date()
    const checkDate = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate())
    
    return dateCurrent >= checkDate
}

export default function itsAge(field) {
    const birthday = new Date(field)
    if (!validedAge(birthday)){
        field.validityState['customError'] = true;
    }
}