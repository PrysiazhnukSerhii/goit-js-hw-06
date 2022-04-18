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


const imageGallery = document.querySelector(".gallery")


let galleryElements = images.map(value => {
  
  const galleryItemEl = document.createElement("li");

  const galleryImageEl = document.createElement("img");
  galleryImageEl.src = value.url;
  galleryImageEl.alt = value.alt;
  galleryImageEl.classList.add ("picture")


  galleryItemEl.appendChild(galleryImageEl);

  return galleryItemEl;
}) 

imageGallery.append(...galleryElements)