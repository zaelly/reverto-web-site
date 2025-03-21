import './Navbar.css'
import logo from '../Assets/hat.png'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("home");

  return (
    <>
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <Link to="/"> 
                    <p>Reverto Brechó</p>
                </Link>
            </div>
            <div className="nav-search">
                <div className="input-group">
                    <input type="text" id='searchInput' className="form-control" placeholder='Pesquisar por...' aria-label="Username" aria-describedby="basic-addon1" />
                    <span className="input-group-text" id="basic-addon1">      
                        <i className="fa-solid fa-magnifying-glass"></i>      
                    </span>
                </div>
            </div>
            <div className="nav-login-cart">
                <ul className='nav-menu'>
                        <li>
                        <Link to="favorits"> 
                            <i className="fa-solid fa-heart"></i>
                            Favoritos
                        </Link>
                    </li>
                </ul>
                <Link to="cart"> 
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                <div className="nav-cart-count">
                    0
                </div>
                <button> 
                    <Link to="LoginSignup">
                        <i className="fa-solid fa-circle-user"></i>
                        Login
                    </Link>
                </button>
            </div>
        </div>
        <div className="nav-categorys">
            <ul className='menu-categorys'>
                <li onClick={()=>{setMenu("home")}} className={menu === "home" ? "category" : ""}><Link to="/">Home</Link></li>
                <li onClick={()=>{setMenu("mens")}} className={menu === "mens" ? "category" : ""}><Link to="Masculino">Homens</Link></li>
                <li onClick={()=>{setMenu("womens")}}  className={menu === "womens" ? "category" : ""}><Link to="Feminino">Mulheres</Link></li>
                <li onClick={()=>{setMenu("kids")}}  className={menu === "kids" ? "category" : ""}><Link to="Kids"> Crianças</Link></li>
            </ul>
        </div>
    </>
  )
}
export default Navbar