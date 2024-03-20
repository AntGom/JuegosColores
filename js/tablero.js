'use strict';

import {abrirVentana, cerrarVentana} from "./ventanas.js"
import  {generarColorAleatorio, transformColorToStr} from "./utility.js"

  //Seleccionar elementos del DOM y asignarlos a variables
const codigoColorElemento = document.getElementById('codigo-color');
const cajasColorElemento = document.getElementById('cajas-color');
const correctosElemento = document.getElementById('correctos');
const incorrectosElemento = document.getElementById('incorrectos');
const buttonReinicioElemento = document.querySelector("#btnReinicio")
const btnContinuarElemento = document.querySelector(".continuar");
const btnReiniciarElemento = document.querySelector(".reinicio");

// MODAL
const cerrarModal = document.querySelector('.cerrarModal');
const modal = document.querySelector('.modalBienvenida');

const modalLose = document.getElementsByClassName('modalLose');
const CerrarModalLose = document.getElementsByClassName('botonCerrar');

  // Evento para cerrar el modal
cerrarModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
// FIN DEL MODAL

buttonReinicioElemento.addEventListener("click", abrirVentana);
btnContinuarElemento.addEventListener("click", cerrarVentana);
btnReiniciarElemento.addEventListener("click", reiniciarJuego);
btnReiniciarElemento.addEventListener("click", cerrarVentana);

  // Declarar variables globales
let puntuacionCorrectos = 0;
let puntuacionIncorrectos = 0;

// Función para generar la caja con el color complementario
function generarCajaColorComplementario(color) {
  const colorComplementario = {
    r: 255 - color.r,
    g: 255 - color.g,
    b: 255 - color.b
  };
  // Eliminar caja de rondaanterior
  const cajaAnterior = document.querySelector('.caja-color-complementario');
  if (cajaAnterior) {
    cajaAnterior.remove();
  }
  const cajaComplementaria = document.createElement('div');
  cajaComplementaria.classList.add('caja-color-complementario');
  cajaComplementaria.style.backgroundColor = `rgb(${colorComplementario.r}, ${colorComplementario.g}, ${colorComplementario.b})`;
  cajaComplementaria.textContent = "COMPLEMENTARIO";
  return cajaComplementaria;
}

  // Función para generar las cajas de color
function generarCajasColor() {
  cajasColorElemento.innerHTML = ''; //limpiar de la ronda anterior
  
  const colorCorrecto = generarColorAleatorio();// genera el código de color que hay que acertar
  codigoColorElemento.textContent = transformColorToStr(colorCorrecto)
  
  // Generar caja con color complementario y agregarla junto al código de color
  const cajaColorComplementario = generarCajaColorComplementario(colorCorrecto);
  codigoColorElemento.parentNode.insertBefore(cajaColorComplementario, codigoColorElemento.nextSibling);

  const posicionCorrecta = Math.floor(Math.random() * 6); // Generar posición correcta aleatoria
  
  for (let i = 0; i < 6; i++) {//iterar y crear las 6cajas 
    const cajaColor = document.createElement('div');
    cajaColor.classList.add('caja-color');
    
    // Asignar el color correcto en posición aleatoria
    if (i === posicionCorrecta) {
      cajaColor.style.backgroundColor = transformColorToStr(colorCorrecto);
      cajaColor.addEventListener('click', () => verificarRespuesta(true));
    } else {
      // Generar colores aleatorios para las otras cajas
      const colorAleatorio = generarColorAleatorio()
      cajaColor.style.backgroundColor = transformColorToStr(colorAleatorio)
      cajaColor.addEventListener('click', () => verificarRespuesta(false));
    }
    cajasColorElemento.appendChild(cajaColor);
  }
}

  // Función para verificar la respuesta del jugador al  clicar una caja
function verificarRespuesta(esCorrecto ) {
  if (esCorrecto) {
    puntuacionCorrectos++;
  } else {
    puntuacionIncorrectos++;
  }
  actualizarPuntuaciones();
}

  // Función para actualizar las puntuaciones mostradas en la página
function actualizarPuntuaciones() {
  correctosElemento.textContent = puntuacionCorrectos;
  incorrectosElemento.textContent = puntuacionIncorrectos;
  if (puntuacionCorrectos === 3) {
    alert('Eres una Máquina');
    reiniciarJuego();
  } else if (puntuacionIncorrectos === 3) {
    modalLose[0].style.display = 'block';
    if (CerrarModalLose[0]) {
      CerrarModalLose[0].addEventListener('click', () => {
        modalLose[0].style.display = 'none';
      });
    }

    reiniciarJuego();
  } else {
    generarCajasColor();
  }
}

  // Función para reiniciar el juego
function reiniciarJuego() {
  puntuacionCorrectos = 0;
  puntuacionIncorrectos = 0;
  actualizarPuntuaciones();
}

  //Llamar a generarCajasColor para empezar el juego
generarCajasColor();