import { Link } from 'react-router-dom'


const Navbar = ({spirit, ducats}) => {
  return (
    <nav className='Navbar'>

        <Link className='nav-link' to='/'><h1 className='branding'>Chrome Magic</h1></Link>
        <div className='nav-items'>
          <div className='currency-display'>
                  <p>Ducats: {ducats}</p>
                  <p>Spirit: {spirit}</p>
          </div>
          <ul>
              <Link className='nav-link' to='/'>Goals</Link>
              <Link className='nav-link' to='/shop'>Shop</Link>
              <Link className='nav-link' to='/summon'>Summon</Link>
          </ul>
        </div>


    </nav>

  )
}

export default Navbar