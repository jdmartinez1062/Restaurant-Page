export default function tabCreation() {
  const navigation = document.createElement('nav');
  const tabList = document.createElement('ul');
  const home = document.createElement('a');
  const about = document.createElement('a');
  const contactUs = document.createElement('a');

  home.textContent = 'Home';
  about.textContent = 'About';
  contactUs.textContent = 'Contact';

  const info = [home, about, contactUs];
  let list;

  for (let i = 0; i < info.length; i += 1) {
    list = document.createElement('li');
    info[i].id = info[i].textContent.toLowerCase();

    list.appendChild(info[i]);
    tabList.append(list);
  }

  navigation.appendChild(tabList);

  return navigation;
}
