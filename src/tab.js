import contact from "./contact";

export default function tabCreation() {
    const navigation = document.createElement('nav');
    const tabList = document.createElement('ul');
    const home = document.createElement('li');
    const about = document.createElement('li');
    const contactUs = document.createElement('li');

    home.textContent = "Home";
    about.textContent = "About";
    contactUs.textContent = "contactUs";

    const info = [home, about, contactUs];
    let link

    for (let i = 0; i < info.length; i += 1) {
        link = document.createElement('a');
        info[i] = link.appendChild(info[i]);
    }


    tabList.append(...info);
    navigation.appendChild(tabList);

    return navigation;

}