import './App.css';
import Nav from '../src/App/Navigation'
import Header from '../src/App/Header.jsx'
import DumpardDiv from './App/dumpyard-div';
import About from './App/about';
import Contact from './App/contact';
import MoreWorkMain from './App/more-work-main';
import Work from './App/work';

function App() {
  return (
    <div className="App">
      
        <Nav/>
        <Header/>
        <DumpardDiv/>
        <Work/>
        <MoreWorkMain/>
        <About/>
        <Contact/>
  
    </div>
   
    
    
    
 
  );
}

export default App;