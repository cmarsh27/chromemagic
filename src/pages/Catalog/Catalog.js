import React, {useState} from 'react'

import Inventory from '../../components/Inventory/Inventory'
import ItemCard from '../../components/ItemCard/ItemCard'


const itemData = [
                  {title : "Invisibility potion", quantity : "10", rarity : "common", description : "Drink to turn invisible", image: "jar-water.png"},
                  {title : "Flying potion", quantity : "10", rarity: "common", description : "Make sure you land before it wears off", image : "potion1-green.png"},
                  {title : "Big cauldron", quantity : "8", rarity: "common", description : "Use to brew big potions", image : "pot1.png"},
                  {title : "Pointy wizard hat", quantity : "3", rarity: "uncommon", description : "Very important wizard gear", image : "satchel.png"},
                  {title : "Shiny dragon egg", quantity : "1", rarity: "rare", description : "Keep it near the fire", image : "puzzle.png"},
                  {title : "Floppy fish", quantity : "5", rarity: "uncommon", description : "Flop flop flop flop", image : "root.png"},
                  {title : "Love potion", quantity : "10", rarity: "common", description : "The most dangerous potion of all",image : "jar-red.png"},
                  {title : "Broken wand", quantity : "6", rarity: "common", description : "Perhaps you can fix it?", image : "torch.png"}
                  ]
                  
let randItems = []


const Catalog = ({ducats, modifyDucats, inventory}) => {


    const random = Math.floor(Math.random() * itemData.length)
    
    const selectRand = () => {
        while (randItems.length < 3) {
          let random = Math.floor(Math.random() * itemData.length)
          if (!randItems.includes(itemData[random])) {
            let newentry=itemData[random]
            newentry.quantity=Math.ceil(Math.random() * newentry.quantity)
            randItems.push(newentry)
          }
        }
    }
  
    selectRand()
  /*
    const buyItem = (item) => {
      if (item.quantity>0) {
        item.quantity-=1
        const newInventory = [...inventory,  item ];
        setcurrentInventory(newInventory)
        console.log(newInventory)
  
      }
    }

  */
  
    return (
      <>
          <header className="header">
              <h1>What's for sale?</h1> 
          </header>
          <section className='section'>
  
          <div className='shop-items'>
            {randItems.map((item, index) => 
                    <div key = {index} >
                    <img src={require("../../Icons/" +  item.image)}></img>
                    <h3 className={item.rarity}>{item.title} - {item.quantity}</h3>
                    <p className='description'> {item.description} </p>
                    <button onClick={() => {console.log("buy item")}}>Buy Recipe</button>
                    </div>
                )}
            </div>
          <div className="divided">
            <h4 className='description'>Ducats: {ducats} </h4>    
            <Inventory inventory={inventory}/>
          </div>
          
  
          </section>
    </>
    )
}

export default Catalog