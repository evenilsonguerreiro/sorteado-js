let btn = document.getElementById('btn')
let numeroMaximo = document.getElementById('numero-maximo').value
const resultado = document.querySelector('.resultado')
let valor = document.querySelector('.valor')

btn.addEventListener('click',function(){

    let numeroMaximo = document.getElementById('numero-maximo').value;
    numeroMaximo = parseInt(numeroMaximo)
    
    let numeroAliatorio = Math.random() * numeroMaximo;
        numeroAliatorio = Math.floor(numeroAliatorio + 1)


    valor.innerText = numeroAliatorio
    resultado.style.display = 'block'

})

function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerText = timeString;
}

// Atualizar o relógio a cada segundo
setInterval(updateTime, 1000);

// Inicializar o relógio quando a página é carregada
updateTime();