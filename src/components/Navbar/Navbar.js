import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='Navbar'>

        <Link className='nav-link' to='/'><h1>Chrome Magic</h1></Link>

        <ul>
            <Link className='nav-link' to='/'>Goals</Link>
            <Link className='nav-link' to='/shop'>Shop</Link>
        </ul>

    </nav>

  )
}

export default Navbar