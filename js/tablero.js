'use strict';

import {abrirVentana, cerrarVentana, abrirInfo, cerrarInfo} from "./ventanas.js"
import  {generarColorAleatorio, pasarColorAStr} from "./utility.js"

  //Seleccionar elementos del DOM y asignarlos a variables
  const codigoColorElemento = document.getElementById('codigo-color');
  const cajasColorElemento = document.getElementById('cajas-color');
  const correctosElemento = document.getElementById('correctos');
  const incorrectosElemento = document.getElementById('incorrectos');
  const botonReinicioElemento = document.querySelector("#btnReinicio")
  const btnContinuarElemento = document.querySelector(".continuar");
  const btnReiniciarElemento = document.querySelector(".reinicio");
  const pistaComplamentario = document.querySelector(".vistaPosterior");
  const botonInicioElemento = document.querySelector("#btnInfo");
  const btnCerrarInfo = document.querySelector(".cerrarInfo")

// Declarar variables globales
let puntuacionCorrectos = 0;
let puntuacionIncorrectos = 0;

// MODAL
const cerrarModal = document.querySelector('.cerrarModal');
const modal = document.querySelector('.modalBienvenida');

const modalLose = document.getElementsByClassName('modalLose');
const CerrarModalLose = document.getElementsByClassName('botonCerrar');

const modalWin = document.getElementsByClassName('modalWin');
const CerrarModalWin = document.getElementsByClassName('cerrarWin');

  // Evento para cerrar el modal
cerrarModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
// FIN DEL MODAL

botonInicioElemento.addEventListener("click", abrirInfo);
btnCerrarInfo.addEventListener("click", cerrarInfo);
botonReinicioElemento.addEventListener("click", abrirVentana);
btnContinuarElemento.addEventListener("click", cerrarVentana);
btnReiniciarElemento.addEventListener("click", reiniciarJuego);
btnReiniciarElemento.addEventListener("click", cerrarVentana);

  

//Funcionalidad de la Caja con Color Complementario
const cajaPista = document.querySelectorAll(".pistaColorComplementario");
const enseñar = (e) => {
  const pistaColor = e.currentTarget;
  pistaColor.classList.add("darVuelta");

  setTimeout(() => {
    pistaColor.classList.remove("darVuelta");
  }, 1000);
};

for (const pistaColorComplementario of cajaPista) {
  pistaColorComplementario.addEventListener("click", enseñar);
}

// Función para generar el color complementario
function generarColorComplementario(color) {
  const colorComplementario = {
    r: 255 - color.r,
    g: 255 - color.g,
    b: 255 - color.b
  };
  
// Establecer el color de fondo de pistaComplementario
pistaComplamentario.style.backgroundColor = `rgb(${colorComplementario.r}, ${colorComplementario.g}, ${colorComplementario.b})`;
}


// Función para generar las cajas de color
function generarCajasColor() {
  cajasColorElemento.innerHTML = ''; //limpiar de la ronda anterior
  
  const colorCorrecto = generarColorAleatorio();// genera el código de color que hay que acertar
  codigoColorElemento.textContent = pasarColorAStr(colorCorrecto);
  generarColorComplementario(colorCorrecto);

  const posicionCorrecta = Math.floor(Math.random() * 6); // Generar posición correcta aleatoria
  
  for (let i = 0; i < 6; i++) {//iterar y crear las 6cajas 
    const cajaColor = document.createElement('div');
    cajaColor.classList.add('caja-color');
    
    // Asignar el color correcto en posición aleatoria
    if (i === posicionCorrecta) {
      cajaColor.style.backgroundColor = pasarColorAStr(colorCorrecto);
      cajaColor.addEventListener('click', () => verificarRespuesta(true));
    } else {
      // Generar colores aleatorios para las otras cajas
      const colorAleatorio = generarColorAleatorio()
      cajaColor.style.backgroundColor = pasarColorAStr(colorAleatorio)
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



    modalWin[0].style.display = 'block';
    if (CerrarModalWin[0]) {
      CerrarModalWin[0].addEventListener('click', () => {
        modalWin[0].style.display = 'none';
      });
    }
    reiniciarJuego();




  } else if (puntuacionIncorrectos === 3) {


    modalLose[0].style.display = 'flex';
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