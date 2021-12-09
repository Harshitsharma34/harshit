import '../App.css'
import Nav from './Navigation'
import Header from './Header'
import DumpardDiv from './dumpyard-div';
import About from './about'
import Contact from './contact';
import MoreWorkMain from './more-work-main';
import Work from './work';

function Main() {
  return (
    <div className="App">
        <Nav/>
        <Header/>
        <DumpardDiv/>
  
        <MoreWorkMain/>
        <About/>
        <Contact/>
    </div>
   
    
    
    
 
  );
}

export default Main;