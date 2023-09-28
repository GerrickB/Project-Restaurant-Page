import './style.css';

function loadHome() {
  const content = document.querySelector('#content');
  
  // Clear
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  // or try this
  // content.textContent = '';

  const missionContainer = document.createElement('div');
  missionContainer.classList.add('mission-container');

  const mission = document.createElement('div');
  mission.id = 'mission';

  const h2 = document.createElement('h2');
  h2.textContent = 'Our Mission';

  const h4 = document.createElement('h4');
  h4.textContent = 'Handpicked, Artisanally Curated, Free Range, Sustainable, Small Batch, Fair Trade, Organic Tea';

  content.appendChild(missionContainer);
  missionContainer.appendChild(mission);
  mission.appendChild(h2);
  mission.appendChild(h4);
}

export default loadHome;
