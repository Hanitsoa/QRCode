const qrCodeInput = document.querySelector('input');
const qrCodeBtn = document.querySelector('button');
const qrCodeImage = document.querySelector('img');
const qrCodeImgActive = document.querySelector('.qr-code-img');
const errorInput = document.getElementById('container');

qrCodeBtn.addEventListener('click', () => {
    const inputValue = qrCodeInput.value;
    if (inputValue.length > 0) {
        qrCodeImgActive.classList.add('active');
        qrCodeImage.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInput.value}`;
        console.log(errorInput);
    }
    else {
        qrCodeInput.classList.add('erreur')
        console.log(qrCodeInput);
        qrCodeImgActive.classList.remove('active');

        setTimeout(() => {
            qrCodeInput.classList.remove('erreur')
        }, 1000);
    } 
});

