const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

// variáveis HTML
const resposta = parseInt(document.getElementById('resposta').textContent)

recognition.addEventListener('result', onSpeak)

function onSpeak(aux){
    chute = parseInt(aux.results[0][0].transcript)
    exibirResposta(chute)
}


// analise de resposta
function exibirResposta(chute){
    document.getElementById('resposta').innerHTML = chute;
    document.getElementById('resposta').style.display = 'block';
    if (numeroSecreto > chute){
        document.getElementById('respostaMenor').style.display = 'none';
        document.getElementById('invalido').style.display = 'none';
        document.getElementById('respostaMaior').style.display = 'block';
    }
    else if(numeroSecreto < chute){
        document.getElementById('respostaMaior').style.display = 'none';
        document.getElementById('invalido').style.display = 'none';
        document.getElementById('respostaMenor').style.display = 'block';
    }
    else if(numeroSecreto === chute){
        document.getElementById('respostaMaior').style.display = 'none';
        document.getElementById('respostaMenor').style.display = 'none';
        document.getElementById('invalido').style.display = 'none';
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número era ${numeroSecreto}</h3>

            <button id='jogar-novamente', class='btn-jogar'>Jogar Novamente</button>
        `
    }
    else{
        document.getElementById('respostaMaior').style.display = 'none';
        document.getElementById('respostaMenor').style.display = 'none';
        document.getElementById('invalido').style.display = 'block';
    }
}

recognition.addEventListener('end', () => {
    recognition.start()
})

// jogar novamente
document.body.addEventListener('click', (elemento) =>{
    if (elemento.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})



