import React from 'react'

import ItemCard from '../ItemCard/ItemCard'

const ShoppeStock = ({stock}) => {
  return (
    <>
        <h2>Items for Sale: </h2>
        <div className='shoppe-stock'>

            {stock.map((item, index) => 
                    <div key = {index} className="shop-item " >
                        <img src={require("../../Icons/" +  item.image)}></img>
                        <h3 className={item.rarity}>{item.title}</h3>
                        <p className='description'> {item.description} </p>
                    </div>
                )}
        </div>
    </>
  )
}

export default ShoppeStock