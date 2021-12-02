import "./App.css";
import Main from "./App/Main";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Dumpyard from "./App/dumpyard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="dumpyard" element={<Dumpyard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
