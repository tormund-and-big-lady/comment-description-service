import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar/Navbar';

const navbar = document.getElementById('navbar');
navbar.style.margin = '50px';

ReactDOM.render(<Navbar />, navbar)