import Dog from './dog.jpg'
import DogAlt from './altText.txt'

function addImage() {
    const img  = document.createElement('img')
    img.alt = DogAlt;
    img.width = 400;
    img.src = Dog;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;
