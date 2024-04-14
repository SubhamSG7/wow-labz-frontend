import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LandingPage from "./Components/LandingPage/LandingPage";
import SignIn from "./Components/SignIn/SignIn";
import Login from "./Components/LogIn/Login";
import HomePage from "./Components/HomePage/HomePage";
import AddProduct from "./Components/AddProducts/AddProduct";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import Orders from "./Components/Orders/Orders";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/Login" element={<Login/>}/>\
      <Route path="/HomePage" element={<HomePage/>}/>
      <Route path="/AddProduct" element={<AddProduct/>}/>
      <Route path="/placeOrder" element={<PlaceOrder />} />
      <Route path="/myOrders" element={<Orders/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;