
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar'
import Work from './components/Work';
import About from './components/About'
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  
  return (
    <div className="App">
      <Router>
     <Navbar />
     <Route exact path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/work' exact component={Work} />
        <Route path='/contact' exact component={Contact} />
     </Router>
    </div>
  );
}
 
export default App;
