export default function home() {
    const container = document.createElement('div');
    const title = document.createElement('h1');
    const description = document.createElement('p');

    title.textContent = "Welcome to our Restaurant Page"
    description.textContent = "Suspendisse potenti. Donec et iaculis ligula. Proin nibh risus, sodales ut fermentum nec, commodo quis dolor. Pellentesque tempus vehicula risus, ut faucibus erat feugiat vitae. Pellentesque pretium eros quam, id semper nibh euismod et. Integer bibendum cursus dolor, et porttitor enim scelerisque nec. Quisque pulvinar pharetra purus, vel condimentum metus accumsan nec. Donec justo leo, maximus quis finibus quis, placerat non sapien. Nam vel vulputate dolor. Nam fermentum tincidunt faucibus. Nullam in maximus nisl, in porttitor felis. Sed pretium, augue in consectetur tempus, diam quam suscipit mauris, eget pulvinar lacus risus ac ipsum. "

    container.appendChild(title);
    container.appendChild(description);

    return container;
};