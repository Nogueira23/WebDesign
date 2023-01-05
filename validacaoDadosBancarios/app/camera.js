const buttonStart = document.querySelector('[data-video-botao]');
const camera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const buttonGetPicture = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const menssage = document.querySelector('[data-mensagem]');
const sendImage = document.querySelector('[data-enviar]');

let imageURL = ''

buttonStart.addEventListener('click', async function () {
    const videoStart = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
    })

    buttonStart.style.display = 'none';
    camera.style.display = 'block';

    video.srcObject = videoStart;   
})

buttonGetPicture.addEventListener('click', () => {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imageURL = canvas.toDataURL('image/jpeg');

    camera.style.display = 'none';
    menssage.style.display = 'block';
});

sendImage.addEventListener('click', () => {
    const getDatas = localStorage.getItem('registerClient');
    const datasJson = JSON.parse(getDatas);



    datasJson.image = imageURL;

    localStorage.setItem('registerClient', JSON.stringify(datasJson))
    window.location.href = '../pages/abrir-conta-form-3.html';
})

