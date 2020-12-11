import home from './home.js'
import tabCreation from './tab.js'
import about from './about.js'
import contact from './contact.js'



window.onload = function () {
    const content = document.getElementById("content")

    content.appendChild(tabCreation());

    const homeTab = document.getElementById("home");
    const aboutTab = document.getElementById("about");
    const contactTab = document.getElementById("contact");


    homeTab.addEventListener('click', (e) => {
        deletePreviousContent(content);
        content.appendChild(home());
    })
    aboutTab.addEventListener('click', (e) => {
        deletePreviousContent(content);
        content.appendChild(about());
    })
    contactTab.addEventListener('click', (e) => {
        deletePreviousContent(content);
        content.appendChild(contact());
    })
};


const deletePreviousContent = (parent) => {
    while (parent.lastChild && parent.children.length > 1) {
        console.log(parent.lastChild)
        parent.removeChild(parent.lastChild);
    }
}

