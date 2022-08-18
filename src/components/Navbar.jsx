import React , {useState} from 'react'
import "./Navbar.css"
import {NavLink} from 'react-router-dom';
import Menu from '../assets/menu.svg';
import Close from '../assets/close.svg'
import Logo from '../assets/logo.png'

const Navbar = () => {

  const [menu , setMenu] = useState(false)

  const styleMenu = {
    left : menu ? 0 : "100%"
  }

  return (
   <header>
     <div className='menu' onClick={()=> setMenu(!menu)}>
        <img src = {Menu} alt="" width="30" style={{marginLeft:"10px"}} />
    </div>

    <div className='logo'>
      <h1>
      <NavLink to= '/'><img src={Logo} alt="" style={
        {height:60 , width: 60}
      } /></NavLink>
      MATRIX LABS
      </h1>
    </div>

    <ul style={styleMenu}>
      <li onClick={()=> setMenu(!menu)}><NavLink to = "/">Home</NavLink></li>
      <li onClick={()=> setMenu(!menu)}><NavLink to = "/">About</NavLink></li>
      <li onClick={()=> setMenu(!menu)}><NavLink to = "/">Whitepaper</NavLink></li>
      <li onClick={()=> setMenu(!menu)}><NavLink to = "/">Audit</NavLink></li>
      <li onClick={()=> setMenu(!menu)}><NavLink to = "/">Telegram</NavLink></li>

      <li onClick={()=> setMenu(!menu)}>
        <img src={Close} alt="" width="30" className='menu'/>
      </li>
      <li  onClick={()=> setMenu(!menu)}><button >Connect</button></li>
    </ul>
   </header>
  )
}

export default Navbar