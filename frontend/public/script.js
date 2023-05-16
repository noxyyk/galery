const ROW_WIDTH = 800;
const ROW_PADDING = 20;
const image_length = 12;
const ROW_SIZE = ROW_WIDTH + ROW_PADDING * 2;
const INTERVAL_TIME = 5000;

const gallery = document.querySelector('.gallery');
const row = document.querySelector('.row');
const modal = document.querySelector('#myModal');
const modalContent = document.querySelector('.modal-content');
const caption = document.querySelector('#caption');
const closeButton = document.querySelector('.close');
let images = Array.from(Array(image_length).keys()).map((_, i) => {
  return {
    src: `./images/obrazek${i}.jpg`,
    alt: `Obrázek ${i}`,
    datasetIndex: i
  };
});

while (images.length < 60) {
  images.push(images[images.length - 12]);
}
//animation
const images_html = document.querySelectorAll('.row img');
const interval = 100;
let position = 0;
function createImageEl(imgData) {
  const img = document.createElement('img');
  img.src = imgData.src;
  img.alt = imgData.alt;
  img.dataset.index = imgData.datasetIndex;
  img.classList.add('gallery-img');
  return img;
}

function init() {
  images.forEach((imgData, i) => {
    const img = createImageEl(imgData);
    let random = 1 + Math.floor(Math.random() * 3);
    gallery.querySelector(`.row-${random}`).appendChild(img);
 });
}

init();

closeButton.addEventListener('click', closeModal);
window.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
          closeModal();
        }
});
function closeModal() {
  if (modal.style.display === "block") {
    modal.style.display = "none";
  }
}
gallery.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    modalContent.src = event.target.src;
    console.log(event.target)
    caption.textContent = event.target.alt
    modal.style.display = "block";
  }
});
