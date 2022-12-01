import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const createGallery = makeCreateGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', createGallery);

function makeCreateGallery(items) {
  return items
    .map(({ preview, description, original }) => {
    return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image"
          src="${preview}"
          alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");
}

const lightbox = new SimpleLightbox('.gallery a', { 

    captionsData: 'alt',
    captionsDelay: 250,
    captionPosition: bottom,
});
 
function openModal(evt) {

  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const originalImage = evt.target.dataset.source;
  instance.element().querySelector("img").src = originalImage;
  instance.show();
  window.addEventListener('keydown', closeModal)
}
 

function closeModal(e) {
  if (e.key === "Escape") {
    instance.close(() => {
      window.removeEventListener('keydown', closeModal);
    })
  }
}

console.log(galleryItems);
