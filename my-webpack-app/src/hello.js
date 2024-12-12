import HelloWebpack from "./components/hello-webpack-button/hello-webpack.js";
import Heading from "./components/heading/heading.js"; 
import _ from 'lodash';
import addImage from "./add-image";


const heading  = new Heading();
heading.render(_.upperFirst('hello world'));
addImage();

const helloWebpackBtn = new HelloWebpack();
helloWebpackBtn.render();

// if (process.env.NODE_ENV === 'production') {
//     console.log('production mode')
// }
// if (process.env.NODE_ENV === 'development') {
//     console.log('development mode')
// }

// helloWebpackBtn.methodInvalid()