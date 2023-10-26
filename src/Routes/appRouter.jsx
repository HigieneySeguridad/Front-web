import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { LandingPage } from "../views/LandingPage";
import { Login } from "../views/Login";
import { Permisos } from '../components/Permisos';
import { Register } from '../components/Register';
import { PanelControl } from '../components/PanelControl';
import { ViewAdmin } from '../views/admin/viewAdmin';
import { ViewInspector } from '../views/inspector/viewInspector';
import { ViewInspectorExt } from '../views/inspectorExt/viewInspectorExt';
import { ViewOperario } from '../views/operario/viewOperario';
import { Chart } from '../components/Chart';
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import AdminRoutes from './AdminRoutes';
import InspectorRoutes from './InspectorRoutes';


export const AppRouter = () => {
  return (
    <>
    <Router>
          <Routes>

            <Route element={<PublicRoutes/>}>
            <Route path="/" element={<LandingPage/>} />
            <Route path='/login' element= {<Login/>}/>
            </Route>
            
            <Route element={<PrivateRoutes/>}>

            <Route element={<AdminRoutes/>}>
              <Route path='/admin' element={<ViewAdmin/>}/>
              <Route path='/chart' element={<Chart/>}/>
            </Route>

            <Route element={<InspectorRoutes/>}>
              <Route path='/panel' element={<PanelControl/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/permisos' element={<Permisos/>}/>
              <Route path='/operario' element={<ViewOperario/>}/>
              <Route path='/inspector' element={<ViewInspector/>}/>
              <Route path='/inspectorExt' element={<ViewInspectorExt/>}/>
            </Route>
            
            </Route>
          </Routes>
    </Router>
    </>
)};
