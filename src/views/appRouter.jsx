import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { LandingPage } from "./LandingPage";
import { Login } from "./Login";
import { Permisos } from '../components/formularios/Permisos';
import { Register } from '../components/Register/Register';
import { PanelControl } from '../components/Panel/PanelControl';
import PrivateRoutes from '../Routes/PrivateRoutes'
import PublicRoutes from '../Routes/PublicRoutes'
import AdminRoutes from '../Routes/AdminRoutes';
import InspectorRoutes from '../Routes/InspectorRoutes';
import OperarioRoutes from "../Routes/OperarioRoutes"
import { Imagenes } from '../components/Images/Images';
import { Aside } from '../components/Aside/Aside';
import { Dashboard } from '../components/Dashboard/Dashboard';
import { Historial } from '../components/Historial/Historial';

export const AppRouter = () => {
  return (
    <>
    <Router>
          <Routes>

            <Route element={<PublicRoutes/>}>
            <Route path="/" element={<LandingPage/>} />
            <Route path='/login' element= {<Login/>}/>
            </Route>
            
            <Route element={<> <Aside/> <PrivateRoutes/> </>}>

            <Route element={<AdminRoutes/>}>
              <Route path='/historial' element={<Historial/>}/> 
              <Route path='/dashboard' element={<Dashboard/>}/> 
              <Route path='/panel' element={<PanelControl/>}/> 
              <Route path='/register' element={<Register/>}/>
              <Route path='/images' element={<Imagenes/>}/>
            </Route>

            <Route element={<InspectorRoutes/>}>
                
            </Route>

            <Route element={<OperarioRoutes/>}>
                <Route path='/permisos' element={<Permisos/>}/>
            </Route>

            </Route>
          </Routes>
    </Router>
    </>
)};
