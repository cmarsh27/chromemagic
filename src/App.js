import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Goals from "./pages/Goals/Goals";
import Shop from "./pages/Shop/Shop";


function App() {
  return (
      <BrowserRouter>
         <Navbar/> 
         <Routes>
            <Route path="/" exact element = {<Goals/>} />
            <Route path="/shop" exact element = {<Shop/>} />

         </Routes>
      </BrowserRouter>
  );
}

export default App;
