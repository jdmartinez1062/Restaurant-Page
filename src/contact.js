const contact = () => {
  const content = document.getElementById('content');
  const container = document.createElement('div');
  const wrapper = document.createElement('div');
  const title = document.createElement('h1');
  const name = document.createElement('p');
  const email = document.createElement('p');
  const phone = document.createElement('p');

  title.textContent = 'Contact Us';
  name.textContent = 'Foo';
  email.textContent = 'foo@email.com';
  phone.textContent = 555555555;

  container.append(title, wrapper);
  wrapper.append(name, email, phone);

  content.appendChild(container);
};

export default contact;
