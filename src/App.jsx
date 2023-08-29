import { Navigation } from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Header } from "./components/Header";
import { Features } from "./components/Features";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Login } from "./components/Login"
import "./App.css";


const App = () => {
  return (
    <div>
      <Navigation />
      <Header data={Header} />
      <Features data={Features} />
      <Services data={Services} />
      <About data={About} />
      <Gallery data={Gallery} />
      <Team data={Team} />
      <Contact data={Contact} />

    <Router>
          <Switch>
            <Route path="/login">   <Login/>    </Route>
            <Route path="/">   <Header/>    </Route>
          </Switch>
    </Router>
  
    </div>
  );
};

export default App;