import React, {useState} from 'react'

import ItemCard from '../../components/ItemCard/ItemCard'
import Inventory from '../../components/Inventory/Inventory'

/*
const recipes=[
    {title : "Enlargement Potion", description : "Pour it on anything to increase the size", cost : "100"},
    {title : "Cat Familiar", description : "Cute and reliable!", cost : "200"},
    {title : "Dog Familiar", description : "Will fetch lost wands", cost : "200"},
    {title : "Ensmallment Potion", description : "Makes things less big", cost : "100"},
    {title : "Birch Wood Wand", description : "The pale wood is very pretty", cost : "150"},
    {title : "Oak Wood Wand", description : "A sturdy wand", cost : "150"},
    {title : "Wizard Cloak", description : "It shimmers in the light", cost : "200"}
]
*/

const items = [
  {title : "Invisibility potion", cost : "10", rarity : "common", description : "Drink to turn invisible", image: "jar-water.png"},
  {title : "Flying potion", cost : "10", rarity: "common", description : "Make sure you land before it wears off", image : "potion1-green.png"},
  {title : "Big cauldron", cost : "8", rarity: "common", description : "Use to brew big potions", image : "pot1.png"},
  {title : "Pointy wizard hat", cost : "3", rarity: "uncommon", description : "Very important wizard gear", image : "satchel.png"},
  {title : "Shiny dragon egg", cost : "1", rarity: "rare", description : "Keep it near the fire", image : "puzzle.png"},
  {title : "Floppy fish", cost : "5", rarity: "uncommon", description : "Flop flop flop flop", image : "root.png"},
  {title : "Love potion", cost : "10", rarity: "common", description : "The most dangerous potion of all",image : "jar-red.png"},
  {title : "Broken wand", cost : "6", rarity: "common", description : "Perhaps you can fix it?", image : "torch.png"}
  ]



const Summon = ({spirit, modifySpirit, inventory, addInventory}) => {

/* 
const summonItem = (item) => {
    if (spirit>=item.cost) {
      modifySpirit(-item.cost)
      const newInventory = [...inventory,  item ];
     setcurrentInventory(newInventory)
    }
  }
*/

  return (
    <>
        <header className="header">
            <h1>What will you summon?</h1> 
        </header>
        <section className='section'>
            <div className='recipe-list'>
            {items.map((item, index) => 
                    <div key = {index} className="recipe-item item-card" >
                    <ItemCard item = {item}/>
                    <button onClick={() => addInventory(item)}>Summon Item</button>
                    </div>
                )}
            </div>
          </section>   

          <section className='light'>
          <div className="divided">
          <div className='currency-display'>
                  <img src={require("../../Icons/potion1-blue.png")}></img> 
                  <p>{spirit}</p>
          </div>
          <Inventory inventory={inventory}/>
          </div>



        </section>
  </>
  )
}

export default Summon