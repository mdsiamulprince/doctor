import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Appointment/Appointment';
import SingUp from './Pages/Login/SingUp';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;
