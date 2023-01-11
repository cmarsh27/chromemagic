import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import Goals from "./pages/Goals/Goals";
import Shop from "./pages/Shop/Shop";
import Summon from "./pages/Summon/Summon";

const defaultInventory = [{name : "Milk Jug", rarity : "common", max : 40 , min : 20 , description : "A delicious drink", image: "jar-water.png"}]

function App() {
   const [spirit , setSpirit]  = useState(JSON.parse(localStorage.getItem("spirit")) || 200)
   const [ducats , setDucats]  = useState(JSON.parse(localStorage.getItem("ducats")) || 15)
   const [inventory , setInventory]  = useState(JSON.parse(localStorage.getItem("inventory")) || defaultInventory)

   useEffect(() => {
      localStorage.setItem("spirit", JSON.stringify(spirit))
   },[spirit])

   useEffect(() => {
      localStorage.setItem("ducats", JSON.stringify(ducats))
   },[ducats])

   useEffect(() => {
      localStorage.setItem("inventory", JSON.stringify(inventory))
   },[inventory])

   
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
               <Route path="/get-started" exact element = {<Landing/>} />
               <Route path="/" exact element = {<Goals spirit={spirit} modifySpirit={modifySpirit} inventory={inventory}/>} />
               <Route path="/shop" exact element = {<Shop ducats={ducats} modifyDucats={modifyDucats}/>} />
               <Route path="/summon" exact element = {<Summon spirit={spirit} modifySpirit={modifySpirit}/>} />
            </Routes>
            <Footer/>
         </BrowserRouter>
   );
}

export default App;
