"use strict";

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const btnCalcular = document.getElementById("btnCalcular");
const saida = document.getElementById("saida");

function obterNotaP1(){
    return +p1.value
}
function obterNotaP2(){
    return +p2.value
}

function calcularMedia(notaP1, notaP2){
    let media = (notaP1+2*notaP2)/3;
    return media;
}

function onClick(){
    let notap1 = obterNotaP1();
    let notap2 = obterNotaP2();
    validarNota(notap1,notap2)
}

function validarNota(notasp1, notasp2){
    if((notasp1 >= 0 && notasp2 >= 0) && (notasp1 < 11 && notasp2 < 11)){
        let mediaCalulada = calcularMedia(notasp1, notasp2);
        saida.textContent = mediaCalulada.toFixed(2);
    }else{
        alerta()
    }
}
function alerta(){
    alert("Nota inválida!!");
}

btnCalcular.addEventListener("click", onClick);

// document.getElementById("saida").textContent= "Oi, mundo";

