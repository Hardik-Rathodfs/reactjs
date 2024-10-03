import './App.css'
import MainRouter from './MainRouter/MainRouter'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './Components/Navbar';

function App() {

  return (
    <>
    <Navbar/>
      <MainRouter/>
    </>
  )
}

export default App
