
import Signup from './Signup'
import Login from './Login'
import {BrowserRouter,Route, Routes } from 'react-router-dom';
import React from 'react'
import Home from './Home'
import Cart from './Cart'
import Details from './Details'
import Getdetails from './Getdetails'
import Updatedetails from './Updatedetails'

function App() {
  return (
    <div>
   <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/details" element={<Details/>}/>
      <Route path='/getdetails' element={<Getdetails/>}/>
      <Route path='/update/:id' element={<Updatedetails/>}/>
      </Routes>
  </BrowserRouter>
     
    </div>
  );
}

export default App;

