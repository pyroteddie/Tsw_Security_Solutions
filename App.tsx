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
  const firebaseConfig = {
    apiKey: "AIzaSyBwW8H1NiKnG8k4x3VZo-PJIp-GSMlI1Ck",
    authDomain: "tswsecuritysolutions.firebaseapp.com",
    databaseURL: "https://tswsecuritysolutions-default-rtdb.firebaseio.com",
    projectId: "tswsecuritysolutions",
    storageBucket: "tswsecuritysolutions.appspot.com",
    messagingSenderId: "617742575499",
    appId: "1:617742575499:web:3fc155638b4d8b81b5b18e",
    measurementId: "G-H43811WCZ5"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


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
