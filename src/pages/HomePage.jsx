import {Footer} from "../components/Footer"
import {Aside} from "../components/Aside"
import { PanelControl } from "../components/PanelControl"

export const HomePage = () => {
  const [user, setUser] = useState('');
  return (
   <>
   <PanelControl/>
   <Aside user={user}/>
   <Footer/>
   
   </>
  )
}

