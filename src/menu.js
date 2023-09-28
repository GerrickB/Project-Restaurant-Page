import './style.css';
import berryBlitz from './img-berryblitz.jpg';
import spicedRum from './img-spiced-rum.jpg';
import donut from './img-donut.jpg';
import myrtleAve from './img-myrtle-ave.jpg';
import bizarre from './img-bedford-bizarre.jpg';

function loadMenu() {
  const content = document.querySelector('#content');

  // Clear
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const teaContainer = document.createElement('div');
  teaContainer.classList.add('tea-container');

  const teaOfMonth = document.createElement('div');
  teaOfMonth.id = 'tea-of-month';

  const h2 = document.createElement('h2');
  h2.textContent = 'Tea of the Month';

  const h4 = document.createElement('h4');
  h4.textContent = "What's Steeping at The Tea Cozy";

  const teaMenu = document.createElement('div');
  teaMenu.id = 'tea-menu';

  let imagesArray = [berryBlitz, spicedRum, donut, myrtleAve, bizarre];
  let captions = [
    'Fall Berry Blitz Tea',
    'Spiced Rum Tea',
    'Seasonal Donuts',
    'Myrtle Ave Tea',
    'Bedford Bizarre Tea'
  ];
  imagesArray.forEach((image, index) => {
    let figure = document.createElement('figure');

    let img = document.createElement('img');
    img.src = image;

    let figcaption = document.createElement('figcaption');
    figcaption.textContent = captions[index];

    figure.appendChild(img);
    figure.appendChild(figcaption);

    teaMenu.appendChild(figure);
  });

  content.appendChild(teaContainer);
  teaContainer.appendChild(teaOfMonth);
  teaOfMonth.appendChild(h2);
  teaOfMonth.appendChild(h4);
  teaContainer.appendChild(teaMenu)
}

export default loadMenu;