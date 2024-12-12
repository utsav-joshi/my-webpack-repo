import Dog from './dog.jpg';
import './dog-image.scss';

class DogImage {

    render() {
        const img  = document.createElement('img')
        img.alt = 'Dog image';
        img.width = 400;
        img.src = Dog;
        img.classList.add('dog-image')
        const body = document.querySelector('body');
        body.appendChild(img);
    }
}

export default DogImage
