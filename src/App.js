import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Goals from "./pages/Goals/Goals";
import Shop from "./pages/Shop/Shop";
import Summon from "./pages/Summon/Summon";


function App() {
   const [spirit , setSpirit]  = useState(200)
   const [ducats , setDucats]  = useState(15)

   const modifySpirit = modifier => {
      setSpirit(current => current + modifier);
   }

   const modifyDucats = modifier => {
      setDucats(current => current + modifier);
   }

   return (
         <BrowserRouter>
            <Navbar spirit={spirit} ducats={ducats}/> 
            <Routes>
               <Route path="/" exact element = {<Goals spirit={spirit} modifySpirit={modifySpirit}/>} />
               <Route path="/shop" exact element = {<Shop ducats={ducats} modifyDucats={modifyDucats}/>} />
               <Route path="/summon" exact element = {<Summon spirit={spirit} modifySpirit={modifySpirit}/>} />
            </Routes>
         </BrowserRouter>
   );
}

export default App;
