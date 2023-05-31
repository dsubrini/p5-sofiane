const arrowLeftElement = document.querySelector('.arrow_left');
const arrowRightElement = document.querySelector('.arrow_right');
const imgBannerElement = document.querySelector('.banner-img');
const pBannerElement = document.querySelector('#banner p');

let index = 0;

const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
];

const changeValueElement = () => {
  //   imgBannerElement.src = './assets/images/slideshow/' + slides[index].image;
  imgBannerElement.src = `./assets/images/slideshow/${slides[index].image}`;
  pBannerElement.innerHTML = slides[index].tagLine;
};

arrowRightElement.addEventListener('click', () => {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  changeValueElement();
});
