import React from 'react'

const Inventory = ({inventory}) => {
    console.log(inventory)
  return (
    <div>
        <h2>Inventory</h2>
        {inventory.map((item, index) => 
            <div key = {index} className="inventory-item">
                <img src={require("../../Icons/" +  item.image)}></img>
                <h4 className={item.rarity}>{item.name}</h4>
                <div className='inventory-description'>
                <p>{item.description} </p>
                <p> This item could sell for {item.min}-{item.max} ducats!</p>
                </div>

            </div>
        )}
    </div>
  )
}

export default Inventory