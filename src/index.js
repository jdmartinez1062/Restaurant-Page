import home from './home';
import tabCreation from './tab';
import about from './about';
import contact from './contact';

const deletePreviousContent = (parent) => {
  while (parent.lastChild && parent.children.length > 1) {
    parent.removeChild(parent.lastChild);
  }
};

window.onload = () => {
  const content = document.getElementById('content');

  content.appendChild(tabCreation());

  const homeTab = document.getElementById('home');
  const aboutTab = document.getElementById('about');
  const contactTab = document.getElementById('contact');

  homeTab.addEventListener('click', () => {
    deletePreviousContent(content);
    home();
  });
  aboutTab.addEventListener('click', () => {
    deletePreviousContent(content);
    about();
  });
  contactTab.addEventListener('click', () => {
    deletePreviousContent(content);
    contact();
  });
};
