// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector('.gallery');

function createGalleryItem(item) {
    const li = document.createElement('li');
    li.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.original;

    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = item.preview;
    image.alt = item.description;

    link.appendChild(image);
    li.appendChild(link);

    return li;
}

const galleryItem = galleryItems.map(item => createGalleryItem(item));

galleryList.append(...galleryItem);


const lightbox = new SimpleLightbox('.gallery__item a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    disableScroll: false,
    history: false,
});




