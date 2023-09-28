import _ from 'lodash';
import './style.css';
import loadHome from './home';
import loadMenu from './menu.js';
import loadContact from './contact.js'
import cozyLogo from './img-tea-cozy-logo.png';

function component() {
  const header = document.querySelector('header');
  
  const myLogo = new Image();
  myLogo.src = cozyLogo;
  myLogo.id = 'logo'

  const ul = document.createElement('ul');
  ul.classList.add('menu');
  let items = ['Home', 'Featured Tea', 'Contact'];
  let events = [loadHome, loadMenu, loadContact]
  items.forEach((itemText, index) => {
    let li = document.createElement('li');
    li.textContent = itemText;
    li.addEventListener('click', events[index]);
    ul.appendChild(li);
  });

  //content.appendChild(header);
  header.appendChild(myLogo);
  header.appendChild(ul);
}

component();
loadHome();

