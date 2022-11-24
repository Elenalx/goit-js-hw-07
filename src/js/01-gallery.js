import { galleryItems } from './gallery-items.js';
// Change code below this line

const instance = basicLightbox.create(`
    <div class="modal">
      <img class="gallery_image"
      src='https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      alt="flower"/>
    </div>
`)



instance.show();
console.log(galleryItems);