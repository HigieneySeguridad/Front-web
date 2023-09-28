import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage"
import { Register } from "./components/Register"
import "./App.css";
import { HomePage } from './pages/HomePage';


const App = () => {
  return (
    <>
    <Router>
          <Routes>

            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<LoginPage/>}/>   
            <Route path='/homepage' element={<HomePage/>}/>
            <Route path="/register" element={<Register/>}/>   
          </Routes>
    </Router>
    </>
  
  
  
)};

export default App;