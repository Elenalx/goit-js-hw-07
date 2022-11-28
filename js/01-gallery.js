import { galleryItems } from './gallery-items.js';
// Change code below this line


const instance = basicLightbox.create(`
    <div class="modal">
      <img class="gallery_image"
      src='https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      alt="flower"/>
    </div>`);

const galleryContainer = document.querySelector(".gallery");

function makeCreateGallery(items) {
  return items
    .map(({ preview, description, original }) => {
    return 
     `<div class="gallery__item">
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

const createGallery = makeCreateGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', createGallery);


