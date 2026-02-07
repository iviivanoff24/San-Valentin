
# San Valentín - Página Interactiva

Pequeña Single Page Application (SPA) creada para pedirle a alguien que sea tu San Valentín con una estética "Aesthetic", tonos pasteles y animaciones suaves.

## Vista previa

- Pantalla inicial con un GIF tierno y la pregunta: **¿Quieres ser mi San Valentín? ❤️**
- Dos botones: **Sí** y **No**.
- El botón **No** se hace más pequeño y cambia de texto cada vez que se pulsa; el botón **Sí** crece.
- Tras varios intentos, el botón **No** desaparece y el **Sí** ocupa la mayor parte de la pantalla con **¡CLARO QUE SÍ!**
- Al confirmar (pulsar **Sí**) aparece un efecto de confeti y un mensaje final: "¡Sabía que dirías que sí! Te amo mucho. ❤️ Nos vemos el 14." junto con un GIF de celebración.

## Cómo usar

1. Clona o descarga este repositorio en tu equipo.
2. Abre el archivo [index.html](index.html) en tu navegador (doble clic o arrastrar al navegador).

No hay pasos de instalación ni dependencias locales; las librerías externas (fuentes y confetti) se cargan desde CDN.

## Estructura de archivos

- [index.html](index.html) — Estructura HTML y enlaces a CSS/JS.
- [style.css](style.css) — Estilos, paleta de colores, animaciones y responsive.
- [script.js](script.js) — Lógica de interacción de botones y generación de corazones/confeti.

## Personalización rápida

- Cambiar textos: Edita los contenidos en [index.html](index.html) y/o los array de frases en [script.js](script.js).
- Reemplazar GIFs: Sustituye las URLs en las etiquetas `img` de [index.html](index.html).
- Ajustar paleta: Modifica las variables CSS en [style.css](style.css) bajo `:root`.

## Responsive

La página está diseñada para verse bien en móviles y escritorio. Para ajustes adicionales revisa las reglas `@media` en [style.css](style.css).

## Créditos

- Fuentes: Google Fonts — `Dancing Script` y `Poppins`.
- Confetti: `canvas-confetti` vía CDN.

## Licencia

Proyecto para uso personal y demostración. Puedes reutilizar y modificar libremente el código.
