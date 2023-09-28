import './style.css';

function loadContact() {
  const content = document.querySelector('#content');
  
  // Clear
  content.textContent = '';

  const contactsContainer = document.createElement('div');
  contactsContainer.classList.add('contacts-container');

  const contacts = document.createElement('div');
  contacts.id = 'contacts'

  const h2 = document.createElement('h2');
  h2.textContent = 'The Tea Cozy';

  const h3 = document.createElement('h3');
  h3.textContent = 'contact@theteacozy.com';

  const h4 = document.createElement('h4');
  h4.textContent = '917-555-8904';

  content.appendChild(contactsContainer);
  contactsContainer.appendChild(contacts);

  contacts.appendChild(h2);
  contacts.appendChild(h3);
  contacts.appendChild(h4);
}

export default loadContact;