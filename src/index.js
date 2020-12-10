import home from './home.js'
import tabCreation from './tab.js'
import about from './about.js'
import contact from './contact.js'



window.onload = function () {
    tabCreation();
    const tabs = document.getElementsByTagName('a');

    for (let i = 0; i < tabs.length; i += 1) {
        tabs[i].addEventListener('click',)
        info[i] = link.appendChild(info[i]);
    }


};


const deletePreviousContent = (parent) => {
    while (parent.firstChild) {

        parent.removeChild(parent.firstChild);
    }
}

