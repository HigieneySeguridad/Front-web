import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { HomePage } from '../Components/HomePage.jsx'
import { Login } from '../Components/Login/Login.jsx';
import { Permisos } from '../components/formularios/Permisos';
import { MostrarForms } from '../components/formularios/MostrarForms';
import { Register } from '../Components/Register/Register.jsx';
import { PanelControl } from '../Components/PanelControl/PanelControl.jsx';
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import AdminRoutes from './AdminRoutes';
import InspectorRoutes from './InspectorRoutes';
import OperarioRoutes from "./OperarioRoutes"
import { Aside } from '../components/Aside/Aside.jsx';
import { Dashboard } from '../components/Dashboard/Dashboard';
import { ArchivosMain } from '../components/Archivos/ArchivosMain';
import { HeaderTool } from '../components/headerTool/HeaderTool';


export const AppRouter = () => {
  return (
    <>
    <Router>
          <Routes>

            <Route element={<PublicRoutes/>}>
            <Route path="/" element={<HomePage/>} />
            <Route path='/login' element= {<Login/>}/>
            </Route>
            
            <Route element={<> <Aside/> <HeaderTool/> <PrivateRoutes/> </>}>

            <Route element={<AdminRoutes/>}>
              <Route path='/formularios/:id' element={<MostrarForms/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/> 
              <Route path='/panel' element={<PanelControl/>}/> 
              <Route path='/register' element={<Register/>}/>
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
