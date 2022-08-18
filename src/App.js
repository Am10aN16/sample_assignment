import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from "react-router-dom";
import Body from './components/Body';
import Lower from './components/Lower';
// import Loading from "./components/loading/Loading"


function App() {

 
  return (
   
    <Router>
       <div >
    <Navbar/>
    <Body/>
    <Lower/>
    </div>
    </Router>
   
  );
}

export default App;
