"use strict"

  // Función para generar un color aleatorio
  function generarColorAleatorio() {
    const color =  {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256)
    };
    return color;

  }

  function transformColorToStr(color){
    return `RGB(${color.r}, ${color.g}, ${color.b})`
  }
  

  export {generarColorAleatorio, transformColorToStr}

