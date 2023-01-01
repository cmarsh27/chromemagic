import React, {usestate} from 'react'

const itemData = [
                  {title : "Invisibility potion", quantity : "10", rarity : "common"},
                  {title : "Flying potion", quantity : "10", rarity: "common"},
                  {title : "Big cauldron", quantity : "8", rarity: "common"},
                  {title : "Pointy wizard hat", quantity : "3", rarity: "uncommon"},
                  {title : "Shiny dragon egg", quantity : "1", rarity: "rare"},
                  {title : "Floppy fish", quantity : "5", rarity: "uncommon"},
                  {title : "Love potion", quantity : "10", rarity: "common"},
                  {title : "Broken wand", quantity : "6", rarity: "common"}
                  ]

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
            <p>
            <b>You can buy items here!</b>
            </p>
            {randItems.map((item, index) => 
                <div key = {index} className={item.rarity}>
                <p>{item.title} - {item.quantity}</p> 
                </div>
            )}
        </header>
        <section className='section'>

        </section>
  </>
  )
}

export default Shop