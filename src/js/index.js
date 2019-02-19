import _ from 'lodash';
import '../css/style.css';
import '../css/font-awesome.min.css'
import img from '../img/icon.png';

import printme from './print.js'

function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // add png into div
    var myicon = new Image();
    myicon.src = img;
    element.appendChild(myicon);

    var btn = document.createElement('button');
    btn.innerHTML = 'click me and the console';
    btn.onclick = printme;

    element.appendChild(btn);
    
    var Icon = document.createElement('i');
    Icon.className = 'fa fa-camera-retro fa-lg'
    element.appendChild(Icon);

    return element;
  }
  
  document.body.appendChild(component());