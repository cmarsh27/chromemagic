import React, {useState} from 'react'

import Inventory from '../../components/Inventory/Inventory'
import ShoppeStock from '../../components/ShoppeStock/ShoppeStock'
import ItemCard from '../../components/ItemCard/ItemCard'


const Shop = ({ducats, modifyDucats, inventory, removeInventory, stock, addStock}) => {

  const sellItem = (item) => {
    addStock(item)
    removeInventory(item)
  }


  return (
    <>
        <header className="header">
            <h1>Player's Magic Shoppe</h1> 
        </header>
        <section className='section'>

          
          <ShoppeStock stock={stock}/>

        </section>
        <section>
          <div className="divided">
          <h4 className='description'>Ducats: {ducats} </h4> 

          <div>

          <h3>Inventory</h3>
          {inventory.map((item, index) => 
              <div key = {index} className="inventory-item">
                  <img src={require("../../Icons/" +  item.image)}></img>
                  <h4 className={item.rarity}>{item.name}</h4>
                  <div className='inventory-description'>
                  <p>{item.description} </p>
                  <p> This item could sell for {item.min}-{item.max} ducats!</p>
                  </div>
                  <button onClick={() => sellItem(item)}>Sell Item</button>

              </div>
          )}
          </div>
          </div>



        </section>
       
       

  </>
  )
}

export default Shop