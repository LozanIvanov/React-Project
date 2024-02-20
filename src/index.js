import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Home from './HomePage';
import OnOff from './components/OnOff';
import Color from './components/ColorPicker';
import Form from './components/RegistrationForm';
import Page from './components/ReactPage';
import './indec.css'
import Footer from './components/footer/footer';
import Img from './components/Slider';
import Hide from './components/HideInput';
import Forms from './components/ContactForm';
import Menue from './components/HumbergerMenu';
import Cube from './components/MovingCube';
import AppCount from './components/AppCounter';
import Text from './exersize1/ComponentText';
import Blue from './exersize1/UlBlue';
import AppLogin from './exersize1/AppLogin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <AppLogin/>
  </React.StrictMode>
);

