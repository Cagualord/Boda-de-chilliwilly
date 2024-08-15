const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMessage = document.querySelector('.final-msg');

//Fecha a futuro
const countdownDate = new Date('05 24, 2025 14:00:00').getTime();

let interval = setInterval(function(){
    //Obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //Obtener las distancias entre ambas fechas
    let distance = countdownDate - now;

    //Calculos a dias-horas-minutos-segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60 )) / (1000));

    //Escribimos resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = seconds;

    //Cuando llegue a 0
    if(distance < 1){
        clearInterval(interval);
        $finalMessage.style.transform = 'translateY(0)';
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
        $days.innerHTML = days;
        $hours.innerHTML = hours;
        $minutes.innerHTML = minutes;
        $seconds.innerHTML = seconds;
    }
}, 1000);