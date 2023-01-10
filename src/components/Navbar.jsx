import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import "./navbar.css";
import Icon from "../assets/icon.ico";
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {

    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar =() =>{
       setOpenLinks(!openLinks) 
    } 


    return (

        <div className='navbar'>
            <div className='leftSide' id={openLinks ? "open" : "close"}>
                <img src={Icon} />
               <div className='hiddenLinks leftSide'> 
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart"><ShoppingCart size={32} /> </Link>
                <Link to="/login">Login</Link>
                </div>
            </div>
            <div className='rightSide'>

                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart"><ShoppingCart size={32} /> </Link>
                <Link to="/login">Login</Link>
                <button onClick={toggleNavbar}><ReorderIcon fontSize='large'/></button>

            </div>

        </div>
    )
}

export default Navbar
