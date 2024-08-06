import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCom from './assets/Components/NavbarCom';
import CorosoulCom from './assets/Components/CorosoulCom';
import Section_1 from './assets/Components/Section_1';
import Section_2 from './assets/Components/Section_2';
import Section_3 from './assets/Components/Section_3';
import Section_4 from './assets/Components/Section_4';
import Section_5 from './assets/Components/Section_5';
import Footer from './assets/Components/Footer';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {

  return (
    <>
    <NavbarCom/>
    <CorosoulCom/>
    <Section_1/>
    <Section_2/>
    <Section_3/>
    <Section_4/>
    <Section_5/>
    <Footer/>
    </>
  )
}

export default App
