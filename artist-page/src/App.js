import {Route, BrowserRouter} from 'react-router-dom';

import LoginPage from "./components/LoginPage";
import Artist from "./components/Artist";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Artist} />
      <Route path="/login" component={LoginPage} />
    </BrowserRouter> 
  );
}

export default App;
