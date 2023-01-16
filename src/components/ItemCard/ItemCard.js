import React from 'react'



const ItemCard = ({item}) => {
  return (
    <div className='item-card'>
          <img src={require("../../Icons/" +  item.image)}></img>
          <h3 className={item.rarity}>{item.title} - {item.quantity}</h3>
          <p className='description'> {item.description} </p>
    </div>
  )
}

export default ItemCard