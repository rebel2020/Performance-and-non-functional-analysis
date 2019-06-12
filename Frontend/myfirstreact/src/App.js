import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Welcome from './Home'
import Loginpage from './Loginpage'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Loginpage">Loginpage</Link>
          </li>
          
        </ul>

        <hr />

        <Route exact path="/Home" component={Welcome} />
        <Route path="/Loginpage" component={Loginpage} />
        
      </div>
    </Router>
  );
}

export default App
