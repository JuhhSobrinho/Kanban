import { HashRouter  as Router, Route, Routes, Navigate } from 'react-router-dom';
import "./App.css";
import Login from "./login";
import SingUp from "./singUp";
import SplashScreen from './splash';
import Projs from './proj/projs';

function App() {

  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SingUp" element={<SingUp />} />
        <Route path="/SplashScreen" element={<SplashScreen />} />
        <Route path="/proj/Projs" element={<Projs/>} />
      </Routes>
    </Router>
  );
}

export default App;
