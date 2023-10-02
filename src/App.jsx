import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./components/Login"
import { Register } from "./components/Register"
import "./App.css";
import { HomePage } from './pages/HomePage';
import { Form1 } from './components/Form1';


const App = () => {
  const [user, setUser] = useState('');
  return (
    <>
    <Router>
          <Routes>

            <Route path="/" element={<LandingPage/>} />
            <Route path='/login'>
            <LoginPage setUser={setUser}/>
            </Route>
            <Route path='/homepage' element={<HomePage/>}/>
            <Route path="/register" element={<Register/>}/> 
            <Route path='/form' element={<Form1/>}/>
          </Routes>
    </Router>
    </>
  
  
  
)};

export default App;