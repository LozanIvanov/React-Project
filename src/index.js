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
import Check from './exersize1/Checkbox';
import AppButton from './exersize1/AppButton';
import AppDropdown from './exersize1/AppDropdown';
import AppList from './components/AppList';
import AppRemoveAdd from './exersize1/AppAddRemoveInput';
import AppAddRemoveInput from './exersize1/AppAddRemoveInput';
import List from './components/AppLists';
import Imagelist from './exersize1/AppImageList';
import Input from './exersize2/AppInput';
import Select from './exersize2/AppSelect';
import AppTable from './exersize2/Aptable';
import AppMenu from './exersize2/AppMenu';
import Homes from './components1/pages/home/Home';
import Appcar from './components1/Appcar';
import Quotes from './components1/AppQuotes';
import TwoButton from './components1/Apptwobutton';
import AppTables from './components1/AppTable';
import AppMovies from './components1/AppMovies';
import AppNews from './components1/AppNews';
import App3 from './exercize3/ShoppingCart';
import AppRoutes from './ex4/routerPages/AppRouterPage';
import {BrowserRouter} from 'react-router-dom';
import AppProduct from './ex4/productCatalog/AppProduct';
import AppAxios from './ex4/AxsiosApi';
import AppDelete from './ex4/AxiosDelete';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppDelete/>
    </BrowserRouter>
    
  </React.StrictMode>
);

