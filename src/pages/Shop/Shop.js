import React, {useState} from 'react'

const itemData = [
                  {title : "Invisibility potion", quantity : "10", rarity : "common", description : "Drink to turn invisible"},
                  {title : "Flying potion", quantity : "10", rarity: "common", description : "Make sure you land before it wears off"},
                  {title : "Big cauldron", quantity : "8", rarity: "common", description : "Use to brew big potions"},
                  {title : "Pointy wizard hat", quantity : "3", rarity: "uncommon", description : "Very important wizard gear"},
                  {title : "Shiny dragon egg", quantity : "1", rarity: "rare", description : "Keep it near the fire"},
                  {title : "Floppy fish", quantity : "5", rarity: "uncommon", description : "Flop flop flop flop"},
                  {title : "Love potion", quantity : "10", rarity: "common", description : "The most dangerous potion of all"},
                  {title : "Broken wand", quantity : "6", rarity: "common", description : "Perhaps you can fix it?"}
                  ]
                  
let inventory=[]

const Shop = () => {

  const random = Math.floor(Math.random() * itemData.length)
  let randItems = []
  
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

  return (
    <>
        <header className="header">
            <h1>What's for sale?</h1>
            {randItems.map((item, index) => 
                <div key = {index} className={item.rarity} >
                <h3>{item.title} - {item.quantity}</h3>
                <p className='description'> {item.description} </p>
                </div>
            )}
        </header>
        <section className='section'>

        </section>
  </>
  )
}

export default Shop