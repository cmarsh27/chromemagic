import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Goals from "./pages/Goals/Goals";
import Shop from "./pages/Shop/Shop";
import Summon from "./pages/Summon/Summon";


function App() {
  return (
      <BrowserRouter>
         <Navbar/> 
         <Routes>
            <Route path="/" exact element = {<Goals/>} />
            <Route path="/shop" exact element = {<Shop/>} />
            <Route path="/summon" exact element = {<Summon/>} />
         </Routes>
      </BrowserRouter>
  );
}

export default App;
