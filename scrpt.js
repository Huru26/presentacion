document.addEventListener("DOMContentLoaded", () => {
  const carouselContainer = document.querySelector('.carousel-container');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  let currentIndex = 0;

  // Función para mover el carrusel
  function moveCarousel(direction) {
    const slides = document.querySelectorAll('.carousel-container img');
    const totalSlides = slides.length;

    currentIndex += direction;

    // Asegurarse de que el índice no se salga de los límites
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    if (currentIndex >= totalSlides) currentIndex = 0;

    // Calcular el desplazamiento necesario
    const offset = -currentIndex * 100; // Mueve las imágenes 100% a la izquierda/derecha
    carouselContainer.style.transform = `translateX(${offset}%)`; // Aplicamos el desplazamiento
  }

  // Asignamos las funciones a los botones
  prevButton.addEventListener('click', () => moveCarousel(-1)); // Mueve a la izquierda
  nextButton.addEventListener('click', () => moveCarousel(1)); // Mueve a la derecha
});


  
document.addEventListener("DOMContentLoaded", () => {
  // Detectar dispositivo y gestionar contenido de descarga
  const downloadContent = document.getElementById("download-content");
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Si es un móvil, mostramos el botón de descarga
    downloadContent.innerHTML = `
      <p>Descarga la app en tu dispositivo móvil:</p>
      <a href="https://drive.google.com/file/d/1HT1xV0IGV3XfVbo44GoJ3YaQx6b9bB7B/view?usp=sharing" class="button">Descargar</a>
    `;
  } else {
    // Si es una computadora, mostramos el código QR
    downloadContent.innerHTML = `
      <p>Escanea este código QR para descargar la app:</p>
      <img src="images/qr-code.png" alt="Código QR para descargar la app">
    `;
  }
});
