import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge'
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'

const container = document.getElementById('app');

ReactDOM.render(<Badge
     firstName="Jymma" 
lastName ="Mogollón" 
avatar = "https://www.gravatar.com/avatar?d=identicon"
jobTitle ="Front-end" 
twitter="mc"
 
/>, container);