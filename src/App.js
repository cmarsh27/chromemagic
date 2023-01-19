import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import Goals from "./pages/Goals/Goals";
import Catalog from "./pages/Catalog/Catalog";
import Shop from "./pages/Shop/Shop";
import Summon from "./pages/Summon/Summon";





const defaultInventory = [{name : "Milk Jug", rarity : "common", max : 40 , min : 20 , description : "A delicious drink", image: "jar-water.png"}]



function App() {
   const [spirit , setSpirit]  = useState(JSON.parse(localStorage.getItem("spirit")) || 200)
   const [ducats , setDucats]  = useState(JSON.parse(localStorage.getItem("ducats")) || 15)
   const [inventory , setInventory]  = useState(JSON.parse(localStorage.getItem("inventory")) || defaultInventory)
   const [stock , setStock]  = useState(JSON.parse(localStorage.getItem("stock")) || [])

   const maxStock = 3;

   useEffect(() => {
      localStorage.setItem("spirit", JSON.stringify(spirit))
   },[spirit])

   useEffect(() => {
      localStorage.setItem("ducats", JSON.stringify(ducats))
   },[ducats])

   useEffect(() => {
      localStorage.setItem("inventory", JSON.stringify(inventory))
   },[inventory])

   useEffect(() => {
      localStorage.setItem("stock", JSON.stringify(stock))
   },[stock])

   
   const modifySpirit = modifier => {
      setSpirit(current => current + modifier);
   }

   const modifyDucats = modifier => {
      setDucats(current => current + modifier);
   }

   const addInventory = item => {
      const newInventory = [...inventory,  item ];
      setInventory(newInventory)
      modifySpirit(-item.cost)
   }

   const removeInventory = item => {
      if (stock.length < maxStock) { 
         const newInventory = inventory.filter((current) => current.title !== item.title)
         setInventory(newInventory)
         console.log(newInventory)
      }
   }

   const addStock = item => {
      if (stock.length < maxStock) { 
         const newStock = [...stock,  item ];
         setStock(newStock)
      }
   }

   const removeStock = item => {
      const newStock = stock.filter((current) => current.title !== item.title)
      setStock(newStock)
   }

   return (
         <BrowserRouter>
            <Navbar spirit={spirit} ducats={ducats}/> 
            <Routes>
               <Route path="/get-started" exact element = {<Landing/>} />
               <Route path="/" exact element = {<Goals spirit={spirit} modifySpirit={modifySpirit} inventory={inventory}/>} />
               <Route path="/catalog" exact element = {<Catalog ducats={ducats} modifyDucats={modifyDucats} inventory={inventory}/>} />
               <Route path="/shop" exact element = {<Shop ducats={ducats} modifyDucats={modifyDucats}  inventory={inventory} removeInventory={removeInventory} stock={stock} addStock={addStock}/>} />
               <Route path="/summon" exact element = {<Summon spirit={spirit} modifySpirit={modifySpirit} inventory={inventory} addInventory={addInventory}/>} />
            </Routes>
            <Footer/>
         </BrowserRouter>
   );
}

export default App;
