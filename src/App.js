import React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Dashboard from "./componentes/Dashboard";
import Home from "./componentes/Home";
import About from "./componentes/About";
function App() {
  return(
    <Router>
      <div>
        <ul>
        <li><Link to="/">Home</Link></li>   
        <li><Link to="/componentes/About">About</Link></li>
        <li><Link to="/componentes/Dashboard">Dashboard</Link></li>
        </ul>
       </div>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/componentes/About"element={<About/>}/>
        <Route path="/componentes/Dashboard"element={<Dashboard/>}/>
      </Routes>

    
    </Router>
  )
}



export default App;
