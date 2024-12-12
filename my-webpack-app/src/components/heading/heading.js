export default class Heading {

    render(pageName) {
        const heading = document.createElement('h1');
        heading.innerHTML = 'Webpack 5: The awesome bundler. This is "' + pageName + '" page';

        const bodyDom = document.querySelector('body');
        bodyDom.appendChild(heading);
    }
}