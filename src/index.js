import './style.css';
// eslint-disable-next-line import/extensions
import headertabs from './header.js';
// eslint-disable-next-line import/extensions
import sidebartabs from './sidebar.js';

function createsidebar() {
  const sidebar = document.createElement('div');
  sidebar.setAttribute('id', 'sidebar');
  return sidebar;
}

function createmaincontent() {
  const maincontent = document.createElement('div');
  maincontent.setAttribute('id', 'maincontent');
  const maincontenttext = document.createElement('div');
  maincontenttext.setAttribute('id', 'maincontenttext');
  maincontent.appendChild(maincontenttext);
  return maincontent;
}

function createheader() {
  const header = document.createElement('div');
  header.setAttribute('id', 'header');
  return header;
}
function createmaindiv() {
  const maindiv = document.createElement('div');
  maindiv.setAttribute('id', 'maindiv');
  maindiv.appendChild(createsidebar());
  maindiv.appendChild(createmaincontent());

  return maindiv;
}
function createdefault() {
  const content = document.createElement('div');
  content.appendChild(createheader());
  content.appendChild(createmaindiv());
  return content;
}
document.body.appendChild(createdefault());
sidebartabs();
headertabs();
