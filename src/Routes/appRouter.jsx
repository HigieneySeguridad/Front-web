import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { LandingPage } from "../views/LandingPage";
import { Login } from "../views/Login";
import { Permisos } from '../components/formularios/Permisos';
import { Register } from '../components/Register';
import { PanelControl } from '../components/PanelControl';
import { Chart } from '../components/Gráficos/Chart';
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import AdminRoutes from './AdminRoutes';
import InspectorRoutes from './InspectorRoutes';
import OperarioRoutes from "./OperarioRoutes"
import { Imagenes } from '../components/Images';
import { Aside } from '../components/Aside';

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
              <Route path='/panel' element={<PanelControl/>}/> 
              <Route path='/register' element={<Register/>}/>
              <Route path='/chart' element={<Chart/>}/>
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
