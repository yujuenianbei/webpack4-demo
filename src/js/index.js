import _ from 'lodash';
import '../css/style.css';
import '../css/font-awesome.min.css'
import Icon from '../img/icon.png';

function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // add png into div
    var myicon = new Image();
    myicon.src = Icon;

    element.appendChild(myicon);

    return element;
  }
  
  document.body.appendChild(component());