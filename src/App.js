import "./App.css";
import Main from "./App/Main";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Dumpyard from "./App/dumpyard";
import CaseStudy from "./App/caseStudy";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="dumpyard" element={<Dumpyard/>} /> 
          <Route path="case-study/:id" element={<CaseStudy/>} />
          
        </Routes>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
