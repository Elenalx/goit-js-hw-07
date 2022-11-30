import { galleryItems } from './gallery-items.js';
// Change code below this line


const instance = basicLightbox.create(`
    <div class="modal">
      <img class="gallery_image"
      src='https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      alt="flower"/>
    </div>`);

const galleryContainer = document.querySelector(".gallery");
const createGallery = makeCreateGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', createGallery);
galleryContainer.addEventListener('click', onGalleryContainerClick);



function makeCreateGallery(items) {
  return items
    .map(({ preview, description, original }) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");
}



function onGalleryContainerClick(evt) {

  evt.preventDefault();
  window.addEventListener('keydown', closeModal);

  const findCreateGallery = evt.target.classList.contains('gallery__image');


  if(!findCreateGallery) {
    return;
  }
  const urlImage = evt.target.getGallery('data-source');
  const desImage = evt.target.getGallery('alt');

  openModal(urlImage, desImage);
}
 


function openModal(url, des) {
  const modalGallery = instance.element().querySelector('.gallery__image');
  
  modalGallery.setGallery('src', url);
  modalGallery.setGallery('alt', des);
 
  instance.show();

}

function closeModal(e) {
  if (e.end === "Escape") {
    instance.close(() => {
      window.removeEventListener('keydown', closeModal);
    })
  }
}