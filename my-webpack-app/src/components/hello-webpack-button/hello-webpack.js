import './hello-webpack.scss';

class HelloWebpack {
    render() {
        const button = document.createElement('button');
        button.innerHTML=  'Hello Webpack';
        button.classList.add('hello-webpack-button');        
        const body = document.querySelector('body');
        button.onclick = function() {
            const paragraph = document.createElement('p');
            paragraph.classList.add('hello-webpack-text');
            paragraph.innerHTML = 'Explore the world of bundling with webpack 5';
            body.appendChild(paragraph);
        }
        body.appendChild(button);
    }

}

export default HelloWebpack