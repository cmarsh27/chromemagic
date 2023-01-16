import { Link } from 'react-router-dom'


const Navbar = ({spirit, ducats}) => {
  return (
    <nav className='Navbar'>

        <Link className='nav-link' to='/'><h1 className='branding'>Summon Success</h1></Link>
        <div className='nav-items'>
          <div className='currency-display'>
                  <img src={require("../../Icons/puzzle.png")}></img> 
                  <p>{ducats}</p>
                  <img src={require("../../Icons/potion1-blue.png")}></img>
                  <p> {spirit}</p>
          </div>
          <ul>
              <Link className='nav-link' to='/'>Goals</Link>
              <Link className='nav-link' to='/shop'>Sell</Link>
              <Link className='nav-link' to='/catalog'>Catalog</Link>
              <Link className='nav-link' to='/summon'>Summon</Link>
          </ul>
        </div>


    </nav>

  )
}

export default Navbar