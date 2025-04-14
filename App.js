import React from 'react';
import './App.css';
import RegistrationForm from './Components/register';  
import LoginForm from './Components/login';  
import Sidebar from './Components/sidebar';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from "./Components/home";
import AboutUs from './Components/Aboutus';
import ContactUs from './Components/contactus';


function App() {
  return (
    <Router> 
      <div className="App">
        <Routes>
          <Route path="/register" element={<RegistrationForm />} /> 
          <Route path="/login" element={<LoginForm />} />  
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/home" element={<BasicExample />} /> 
          <Route path="/" element={<BasicExample />} /> 
          <Route path="/Aboutus" element={<AboutUs />} /> 
          <Route path="/contactus" element={<ContactUs />} /> 
         
        </Routes>
        {/* <BasicExample /> */}
      </div>
    </Router>

    
  );
}



export default App;
