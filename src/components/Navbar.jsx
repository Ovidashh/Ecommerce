import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import "./navbar.css";
import logo from '../assets/vector.jpg';
import ReorderIcon from '@mui/icons-material/Reorder';
import { useMediaQuery } from '@mui/material';

const Navbar = () => {

    const [openLinks, setOpenLinks] = useState(false);
    
    const toggleNavbar =() =>{
       setOpenLinks((openLinks) => !openLinks); 
    }; 

    const isMobile = useMediaQuery('(max-width: 600px)');
    

    useEffect(() => {
        if (!isMobile) {
            setOpenLinks(false);
        }
    }, [isMobile]);

    return (

        <div className='navbar'>
            <div className='leftSide' id={openLinks ? "open" : "close"}>
                <img src={logo} id="diamond"/>
                <p>O~Vis</p>
                <div className='hiddenLinks leftSide'> 
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/cart"><ShoppingCart size={32} /> </Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login">Login</Link>
                    
                </div>
            </div>

            <div className='rightSide'>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart"><ShoppingCart size={32} /> </Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
                
                <button onClick={toggleNavbar}><ReorderIcon fontSize='large'/></button>
            </div>
        </div>
    )
}

export default Navbar
