import React, {useState} from 'react'

const recipes=[
    {title : "Enlargement Potion", description : "Pour it on anything to increase the size", cost : "100"},
    {title : "Cat Familiar", description : "Cute and reliable!", cost : "200"},
    {title : "Dog Familiar", description : "Will fetch lost wands", cost : "200"},
    {title : "Ensmallment Potion", description : "Makes things less big", cost : "100"},
    {title : "Birch Wood Wand", description : "The pale wood is very pretty", cost : "150"},
    {title : "Oak Wood Wand", description : "A sturdy wand", cost : "150"},
    {title : "Wizard Cloak", description : "It shimmers in the light", cost : "200"}
]



const Summon = ({spirit, modifySpirit}) => {

const [inventory, setcurrentInventory] = useState([])

const summonItem = (item) => {
    if (spirit>=item.cost) {
      modifySpirit(-item.cost)
      const newInventory = [...inventory,  item ];
      setcurrentInventory(newInventory)
    }
  }

  return (
    <>
        <header className="header">
            <h1>What will you summon?</h1> 
        </header>
        <section className='section'>
            <h4 className='description'>Spirit: {spirit} </h4>    
            <div className='recipe-list'>
            {recipes.map((item, index) => 
                    <div key = {index} className="recipe-item" >
                    <h3>{item.title} - {item.cost}</h3>
                    <p className='description'> {item.description} </p>
                    <button onClick={() => {summonItem(item)}}>Summon Item</button>
                    </div>
                )}
            </div>

            <h3>Inventory</h3>    
            {inventory.map((item,index) =>
            <div key={index} className="inventory">
            <p className='description'>{item.title}</p>
            </div>
          )}

          </section>   
  </>
  )
}

export default Summon