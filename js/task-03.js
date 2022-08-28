const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeImagesMarkup = ({ url, alt }) => {
  return `<li><img style="display: block; padding: 15px; margin: 0 auto" src="${url}" alt="${alt}" width="1260"></li>`;
};
const galleryEl = document.querySelector('.gallery');
const makeGallery = images.map(makeImagesMarkup).join('');
galleryEl.insertAdjacentHTML('afterbegin', makeGallery);
galleryEl.style.listStyle = 'none';
galleryEl.style.padding = '0';
galleryEl.style.margin = '0';
console.log(galleryEl);
console.log(makeGallery);
console.log(makeImagesMarkup);