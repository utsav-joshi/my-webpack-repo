import Heading from "./components/heading/heading";
import DogImage from "./components/dog-image/dog-image";
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('Dog Image'));

const dogImage = new DogImage();
dogImage.render();
