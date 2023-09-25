import _ from 'lodash';
import './style.css';
import Logo from './img-tea-cozy-logo.png';

function component() {
  const content = document.querySelector('#content');
  const header = document.createElement('header');
  
  const myLogo = new Image();
  myLogo.src = Logo;

  const ul = document.createElement('ul');
  ul.classList.add('menu');
  let items = ['Mission', 'Featured Tea', 'Locations'];
  items.forEach(itemText => {
    let li = document.createElement('li');
    li.textContent = itemText;
    ul.appendChild(li);
  });

  const missionContainer = document.createElement('div');
  missionContainer.classList.add('mission-container');

  const mission = document.createElement('div');
  mission.id = 'mission';

  const h2 = document.createElement('h2');
  h2.textContent = 'Our Mission';

  const h4 = document.createElement('h4');
  h4.textContent = 'Handpicked, Artisanally Curated, Free Range, Sustainable, Small Batch, Fair Trade, Organic Tea';

  content.appendChild(header);
  header.appendChild(myLogo);
  header.appendChild(ul);

  content.appendChild(missionContainer);
  missionContainer.appendChild(mission);
  mission.appendChild(h2);
  mission.appendChild(h4);

  return content;
}

document.body.appendChild(component());

//alert('heya')

