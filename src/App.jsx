import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { LandingPage } from "./pages/LandingPage";
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import "./App.css";
import { HomePage } from './pages/HomePage';
import { Form1 } from './components/Form1';
import { Chart } from "./components/Chart"

const App = () => {
  return (
    <>
    <Router>
          <Routes>

            <Route path="/" element={<LandingPage/>} />
            <Route path='/login' element= {<Login/>}/>
            <Route path='/homepage' element={<HomePage/>}/>
            <Route path="/register" element={<Register/>}/> 
            <Route path='/form' element={<Form1/>}/>
            <Route path='/chart' element={<Chart/>}/>
          </Routes>
    </Router>
    </>
  
  
  
)};

export default App;