import './App.css';
import './browser.css';
import Browser from './browser';
import { Routes,Route } from "react-router-dom";
import Browserhm from './browserhm';
import TC from './TC';

function App() {
  return (
     <>
     
     <Routes>
     <Route path="/custom-Googlesearch/" element={[ <Browserhm/>]}/>
     <Route path="/custom-Googlesearch/query/:query" element={[ <Browser/>]}/>
     <Route path="/custom-Googlesearch/term&condition" element={[ <TC/>]}/>
     </Routes>
     
     
     
     
     
     
     </>
  );
}

export default App;
