import React from 'react'



const ItemCard = ({item}) => {
  return (
    <div className=''>
          <img src={require("../../Icons/" +  item.image)}></img>
          <h3 className={item.rarity}>{item.title} - {item.cost}</h3>
          <p className='description'> {item.description} </p>
    </div>
  )
}

export default ItemCard