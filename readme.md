CÓMO FUNCIONA??:

1- Función generarColorAleatorio():
    Devuelve un objeto que representa un color RGB aleatorio. Primero, utiliza Math.random() para generar un número aleatorio entre 0 y 1 para cada componente de color (rojo, verde y azul). Luego, multiplica cada número por 256 y lo redondea hacia abajo utilizando Math.floor() para que el rango sea de 0 a 255. Retorna un objeto con los valores de  (r),  (g) y  (b) generados aleatoriamente.

2- Función generarCodigoColor(color):
    Esta función toma un objeto de color (en formato {r: ..., g: ..., b: ...}) como argumento y devuelve una cadena de texto que representa el código de color RGB correspondiente. Simplemente concatena los componentes del color con el formato "RGB(r, g, b)" y los valores específicos de rojo (color.r), verde (color.g) y azul (color.b).

3- Función generarCajasColor():
    - Primero, limpia el contenedor de cajas (cajasColorElemento.innerHTML = '') de la ronda anterior. 
    - Luego, genera un color aleatorio correcto llamando a 'generarColorAleatorio'() y enseña este código de color correcto en el elemento correspondiente (codigoColorElemento.textContent). 
    - Después, crea cuatro cajas de color (div) en un bucle for, cada una con un color aleatorio generado utilizando Math.random() y Math.floor() para los componentes de  los colores. 
    - Se agrega un evento de clic a cada caja que llama a 'verificarRespuesta'() con un argumento que indica si la caja es la correcta (basado en su posición en el bucle).

4- Función verificarRespuesta(esCorrecto, colorCorrecto):
    - Esta función recibe dos argumentos: esCorrecto, un booleano que indica si la respuesta es correcta, y colorCorrecto, el objeto de color correcto generado previamente. 
    - Si la respuesta es correcta (esCorrecto es true), incrementa la puntuación de respuestas correctas (puntuacionCorrectos) en 1. De lo contrario, incrementa la puntuación de respuestas incorrectas (puntuacionIncorrectos) en 1. Luego, llama a actualizarPuntuaciones() para reflejar los cambios en el documento.

5- Función actualizarPuntuaciones():
    - Esta función actualiza los elementos del DOM que muestran la puntuación de respuestas correctas e incorrectas (correctosElemento.textContent y incorrectosElemento.textContent). 
    - Luego, verifica si el jugador ha ganado (puntuacionCorrectos === 3) o perdido (puntuacionIncorrectos === 3). Si gana o pierde, muestra un  'alert()' y reinicia el juego, si no, llama a 'generarCajasColor()' para continuar el juego.

6- Función reiniciarJuego():
    - Esta función reinicia las puntuaciones de respuestas correctas e incorrectas a 0 y llama a 'actualizarPuntuaciones()' para reflejar los cambios en el documento. Esto permite comenzar de nuevo.

Inicio del juego
Finalmente, se llama a generarCajasColor() al principio para iniciar el juego generando las primeras cajas de color y mostrándolas en el documento.