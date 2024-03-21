"use strict"

function abrirVentana() {
    document.getElementById("miVentana").style.display = "block";
}

function cerrarVentana() {
    document.getElementById("miVentana").style.display = "none";
}

function abrirInfo() {
    document.getElementById("infoVentana").style.display = "block";
}

function cerrarInfo() {
    document.getElementById("infoVentana").style.display = "none";
}

export {abrirVentana, cerrarVentana, abrirInfo, cerrarInfo};