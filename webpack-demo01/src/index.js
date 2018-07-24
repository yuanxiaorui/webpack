import _ from 'lodash'
import './style.css';
import Logo from './logo.png';
import Data from './data.json'

function component() {
    var element = document.createElement('div')
    element.innerHTML =_.join(['Hello', 'webpack'], ' ');

    // css样式
    element.classList.add('hello');

    //图片
    var myIcon = new Image();
    myIcon.src = Logo;
    element.appendChild(myIcon)
    console.log("Data:", Data)

    return element
}
document.body.appendChild(component())