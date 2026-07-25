const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const botones = document.querySelectorAll('.btn');
const images = document.querySelectorAll('.images');

let imgMuestra = ["001.png", "002.png", "003.png", "004.png"];

let contador = 0;

btnLeft.addEventListener("click", izquierda);
btnRight.addEventListener("click", derecha);

function derecha() {
    contador++;
    if (contador > imgMuestra.length - 1) {
        contador = 0;
    }
    images[0].style.backgroundImage = `url('img/${imgMuestra[contador]}.png')`;
}

function izquierda() {
    contador--;
    if (contador < 0) {
        contador = imgMuestra.length - 1;
    }
    images[0].style.backgroundImage = `url('img/${imgMuestra[contador]}.png')`;
}
