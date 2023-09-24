import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  // Before: Lodash, currently included via a script, is required for this line to work
  // After:Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

//document.body.appendChild(component());