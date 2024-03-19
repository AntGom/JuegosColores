"use strict"

function abrirVentana() {
    document.getElementById("miVentana").style.display = "block";
}

function cerrarVentana() {
    document.getElementById("miVentana").style.display = "none";
}

export {abrirVentana, cerrarVentana}