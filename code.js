var intervalo;

function crono() {
    if(intervalo) return false;
    let seg = document.getElementById("segundos");
    let min = document.getElementById("minutos");
    let hor = document.getElementById("horas");
    let segundos = parseInt(seg.innerHTML);
    let minutos = parseInt(min.innerHTML);
    let horas = parseInt(hor.innerHTML);
    intervalo = setInterval(()=>{
        seg.innerHTML =+ segundos <= 10? '0' + segundos: segundos;
        min.innerHTML =+ minutos <= 10? '0' + minutos: minutos;
        hor.innerHTML =+ horas <= 10? '0' + horas: horas;
        segundos++;
        if(segundos == 61){
            segundos = 0;
            minutos++;
        }
        if(minutos == 61){
            minutos = 0;
            horas++;
        }

    },1000);
}


window.onload = () => {

let iniciar = document.getElementById('iniciar');
let stop = document.getElementById('parar');
let reset = document.getElementById('reiniciar');

iniciar.addEventListener('click', crono)
    

stop.addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = null;
});

//resetear cronometro
reset.addEventListener('click', () => {
    clearInterval(intervalo);
    document.getElementById("segundos").innerHTML = '00';
    document.getElementById("minutos").innerHTML = '00';
    document.getElementById("horas").innerHTML = '00';  
});


}