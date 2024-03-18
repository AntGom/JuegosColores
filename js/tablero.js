'use strict';

  //Seleccionar elementos del DOM y asignarlos a variables
const codigoColorElemento = document.getElementById('codigo-color');
const cajasColorElemento = document.getElementById('cajas-color');
const correctosElemento = document.getElementById('correctos');
const incorrectosElemento = document.getElementById('incorrectos');

  // Declarar variables globales
let puntuacionCorrectos = 0;
let puntuacionIncorrectos = 0;

  // Función para generar un color aleatorio
function generarColorAleatorio() {
  return {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256)
  };
}

// Función para generar el código de color RGB correcto
function generarCodigoColor(color) {
  return `RGB(${color.r}, ${color.g}, ${color.b})`;
}

  // Función para generar las cajas de color
function generarCajasColor() {
  cajasColorElemento.innerHTML = ''; //limpiar de la ronda anterior
  const colorCorrecto = generarColorAleatorio(); //generar color aleatorio correcto
  const posicionCorrecta = Math.floor(Math.random() * 6); // Generar posición correcta aleatoria

  codigoColorElemento.textContent = generarCodigoColor(colorCorrecto);// genera el código de color que hay que acertar
   const colorComplementario = {  //color del texto como el color complementario del color correcto
    r: 255 - colorCorrecto.r,
    g: 255 - colorCorrecto.g,
    b: 255 - colorCorrecto.b
  };
  codigoColorElemento.style.color = `rgb(${colorComplementario.r}, ${colorComplementario.g}, ${colorComplementario.b})`;

  for (let i = 0; i < 6; i++) {
    const cajaColor = document.createElement('div');//iterar y crear las 4cajas 
    cajaColor.classList.add('caja-color');
    
    // Asignar el color correcto en posición aleatoria
    if (i === posicionCorrecta) {
      cajaColor.style.backgroundColor = `rgb(${colorCorrecto.r}, ${colorCorrecto.g}, ${colorCorrecto.b})`;
      cajaColor.addEventListener('click', () => verificarRespuesta(true, colorCorrecto));
    } else {
      // Generar colores aleatorios para las otras cajas
      cajaColor.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      cajaColor.addEventListener('click', () => verificarRespuesta(false, colorCorrecto));
    }

    cajasColorElemento.appendChild(cajaColor);
  }
}

  // Función para verificar la respuesta del jugador al  clicar una caja
function verificarRespuesta(esCorrecto) {
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
    alert('Vete a casa, Looser');
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
