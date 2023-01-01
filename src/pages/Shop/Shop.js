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
                  
let randItems = []

const Shop = () => {

  const [inventory, setcurrentInventory] = useState([])

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

  const buyItem = (item) => {
    if (item.quantity>0) {
      item.quantity-=1
      const newInventory = [...inventory,  item ];
      setcurrentInventory(newInventory)
      console.log(newInventory)

    }
  }

  return (
    <>
        <header className="header">
            <h1>What's for sale?</h1> 
        </header>
        <section className='section'>
        <div className='shop-items'>
          {randItems.map((item, index) => 
                  <div key = {index} className={item.rarity} >
                  <h3>{item.title} - {item.quantity}</h3>
                  <p className='description'> {item.description} </p>
                  <button onClick={() => {buyItem(item)}}>Buy Item</button>
                  </div>
              )}
          </div>
        
        {inventory.map((item,index) =>
            <div key={index} className="inventory">
            <p>{item.title}</p>
            </div>
          )}

        </section>
  </>
  )
}

export default Shop