let progressBar = document.querySelector('.circular-progress');

// declaramos variable progressBar aplicando un query selector
// este selector querySelector selecciona el elemento con un selectos css devolviendo el primer elemento que conincida

let valueContainer = document.querySelector('.value-container');

let progressValue = 0;
let progressEndValue = 65; 
// este es el valor final visible
let speed = 10;

let progress = setInterval(() => {
    progressValue++;
    
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
        #f7e700 ${progressValue * 3.6}deg,
        #fff9cd ${progressValue * 3.6}deg )`;

    if (progressValue == progressEndValue){
        clearInterval(progress);
    }

}, speed);

