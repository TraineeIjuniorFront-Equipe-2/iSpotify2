import Dashboard from "./components/Dashboard";
import {Routes,Route} from 'react-router-dom'
import LoginPage from "./components/LoginPage"
import Navbar from "./components/Navbar"

import "./App.css";

function App() {
  return (
    <div className="App">
        <Navbar />

        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
        </Routes>
        
    </div>
  );
}

export default App;
