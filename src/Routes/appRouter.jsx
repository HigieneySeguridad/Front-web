import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { LandingPage } from "../views/LandingPage";
import { Login } from "../views/Login";
import { Permisos } from '../components/formularios/Permisos';
import { MostrarForms } from '../components/formularios/MostrarForms';
import { Register } from '../components/Register';
import { PanelControl } from '../components/PanelControl';
import { Chart } from '../components/Gráficos/Chart';
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import AdminRoutes from './AdminRoutes';
import InspectorRoutes from './InspectorRoutes';
import OperarioRoutes from "./OperarioRoutes"
import { Aside } from '../components/Aside';
import { Dashboard } from '../components/Dashboard/Dashboard';
import { ArchivosMain } from '../components/Archivos/ArchivosMain';


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
              <Route path='/formularios/:id' element={<MostrarForms/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/> 
              <Route path='/panel' element={<PanelControl/>}/> 
              <Route path='/register' element={<Register/>}/>
              <Route path='/chart' element={<Chart/>}/>
              <Route path='/archivos' element={<ArchivosMain/>}/>
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
