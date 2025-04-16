import React , {useContext, useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to = '/' onClick={() => setMenu("home") } className={menu === "home" ? "active": ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu") } className={menu === "menu" ? "active": ""}>menu</a>
        <a href='#app-download'onClick={() => setMenu("mobile-up") } className={menu === "mobile-up" ? "active": ""}>mobile-up</a>
        <a href='#footer' onClick={() => setMenu("contact-as") } className={menu === "contact-as" ? "active" : ""}>contact as</a>
      </ul>
      <div className="navbar-right">
        <img src="src/assets/search_icon.png" alt="" />
        <div className="navbar-search-icon">
           <Link to='/cart' ><img src="src/assets/basket_icon.png" alt="" /></Link>
           <div className={getTotalCartAmount() ===0? "": "dot"}></div>
        </div>
        <button onClick= {() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
