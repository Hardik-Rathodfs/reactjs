import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/navbar.jsx'
import Main from './components/main.jsx'
import {useState} from 'react'; 
import Footer from './components/footer.jsx'

function App() {

  const[state,SetState] = useState("Web Page")

  return (
    <div className="App">
    <h1>{state}</h1>
    <Navbar/>
    <Main/>
    <Footer/>
    </div>
  );
}

export default App;
