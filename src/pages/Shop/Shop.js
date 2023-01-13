import React, {useState} from 'react'

import Inventory from '../../components/Inventory/Inventory'



const Shop = ({ducats, modifyDucats, inventory}) => {




  return (
    <>
        <header className="header">
            <h1>Player's Magic Shoppe</h1> 
        </header>
        <section className='section offwhite'>
          <h4 className='description'>Ducats: {ducats} </h4>    
          <p>This is your Magic shop! You can't do anything here yet.</p>
          <Inventory inventory={inventory}/>
  

        </section>
  </>
  )
}

export default Shop