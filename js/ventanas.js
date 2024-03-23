"use strict"
let botonReiniciar = document.getElementById("miVentana");
let botonInfo = document.getElementById("infoVentana");

function abrirVentana() {
    if (botonReiniciar.style.display === "none") {
        botonReiniciar.style.display = "block";
        poderHacerClickEnLosColores = false;
    }
    
}

function cerrarVentana() {
    if (botonReiniciar.style.display !== "none") {
        botonReiniciar.style.display = "none";
        poderHacerClickEnLosColores = true;
    }
}

function abrirInfo() {
    if (botonInfo.style.display === "none") {
        botonInfo.style.display = "block";
        poderHacerClickEnLosColores = false;
    }
}

function cerrarInfo() {
    if (botonInfo.style.display !== "none") {
        botonInfo.style.display = "none";
        poderHacerClickEnLosColores = true;
    }
}

export {abrirVentana, cerrarVentana, abrirInfo, cerrarInfo};