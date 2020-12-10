export default function about() {
    const container = document.createElement('div');
    const title = document.createElement('h1');
    const description = document.createElement('p');

    title.textContent = "About us"
    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae quam sollicitudin nunc ultricies efficitur. Maecenas vulputate dapibus luctus. Nam ultrices tellus ut sem ornare viverra. Nulla facilisi. Nam pretium fermentum vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat accumsan tortor. Nullam molestie metus non velit hendrerit pellentesque. Integer non convallis mauris. Phasellus id orci a est suscipit luctus. Nunc libero ante, semper quis lectus sit amet, tincidunt pellentesque mi. Curabitur finibus imperdiet massa ultricies tristique. Etiam purus sem, sollicitudin et volutpat ut, aliquet et orci. Sed commodo vestibulum tellus et placerat. "

    container.appendChild(title);
    container.appendChild(description);

    return container;
};