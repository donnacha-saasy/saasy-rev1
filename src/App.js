
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Nav from './components/Nav.js';
import HouseType from './quote/HouseType';
import Schedule from './quote/Schedule';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import HowItWorks from './components/How';
import Testimonials from './components/Testimonials';
import MobileNavigation from './components/Nav.js';
import Powerflushing from './components/Powerflushing.js';

const App = () => (
  <Router>

    <Nav />
    <Header />
    <Services />
    <WhyChoose />
    <HowItWorks />
    <Testimonials />
    <Footer />

  </Router>
);
export default App;