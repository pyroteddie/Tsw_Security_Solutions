import * as React from 'react';
import './style.css';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {  BrowserRouter as Router,  Routes,  Route,  Link} from "react-router-dom";
import HomeScreen from './screens/home';
import Header from './components/header'
import ServicesScreen from './screens/services'
import AboutScreen from './screens/about'
import Footer from './components/footer'
  
export default function App() {
  return (
    <Router>
    <div>
    <Header/>
      <Routes>
        <Route exact path="/" element={< HomeScreen/>}/> 
        <Route exact path='/services' element={ <ServicesScreen/> } />
        <Route exact path='/about' element={ <AboutScreen/> } />
        
      </Routes>
    <Footer/>
    </div>
  </Router>
);
}
