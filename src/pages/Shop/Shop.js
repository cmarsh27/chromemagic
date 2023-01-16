import React, {useState} from 'react'

import Inventory from '../../components/Inventory/Inventory'
import ItemCard from '../../components/ItemCard/ItemCard'


const Shop = ({ducats, modifyDucats, inventory, removeInventory}) => {




  return (
    <>
        <header className="header">
            <h1>Player's Magic Shoppe</h1> 
        </header>
        <section className='section offwhite'>
          <h4 className='description'>Ducats: {ducats} </h4>    
          <p>This is your Magic shop! You can't do anything here yet.</p>
          <Inventory inventory={inventory}/>
          <div className='recipe-list'>
            {inventory.map((item, index) => 
                    <div key = {index} className="recipe-item" >
                    <ItemCard item = {item}/>
                    <button onClick={() => removeInventory(item)}>Sell Item</button>
                    </div>
                )}
            </div>
  

        </section>
  </>
  )
}

export default Shop