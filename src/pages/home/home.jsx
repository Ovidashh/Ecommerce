import React from 'react'
import { Link } from "react-router-dom";
import BannerImg from '../../assets/invitatie1.jpg';
import '../home/home.css';

function Home() {
    return (
        // <div className='home' style={{ backgroundImage: `url(${BannerImg})`  }}>
        //     <div className='headerContainer'>
        //         <h1>Pono Craft's By Alexandra Bucataru</h1>
        //         <p>EARTH without "ART" is just "EH"</p>
        //         <Link to ="/shop"><button>Vezi invitatiile</button></Link>
        //     </div>
        // </div>
        <div className='banner'>
            <div className='banner-img'>
            <img src={BannerImg} id="bannerimg" alt="Logo"/>;
            </div>
            <div className='banner-text'>
                <h1>Blue Tag</h1>
                <p>
                    "Love is like the wind, you can’t see it but you can feel it.” Nicholas Sparks
                </p>
            </div>
        </div>
    )
}

export default Home;